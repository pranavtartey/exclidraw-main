import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from '@repo/backend-common/config';
import { prismaClient } from '@repo/db/client';


const wss = new WebSocketServer({ port: 8080 });

interface User {
    ws: WebSocket,
    rooms: string[],
    userId: string
}

const users: User[] = []

const checkUser = (token: string): string | null => {
    try {

        const decoded = jwt.verify(token, JWT_SECRET)
        if (typeof decoded == "string") {
            return null
        }
        if (!decoded || !decoded.userId) {
            return null
        }

        return decoded.userId
    } catch (err) {
        return null
    }
}

wss.on('connection', function connection(ws, request) {

    const url = request.url;
    if (!url) {
        return;
    }
    const queryParams = new URLSearchParams(url.split("?")[1]);

    const token = queryParams.get("token") || ""

    const userId = checkUser(token)


    if (userId == null) {
        ws.close();
        return null
    }

    users.push({
        userId,
        rooms: [],
        ws
    })

    console.log(users)

    ws.on('message', async function message(data) {

        console.log(data)
        const parsedData = JSON.parse(data.toString())
        console.log(parsedData)
        if (parsedData.type === "join_room") {
            console.log("parsedData.type = ", parsedData.type)
            const user = users.find(x => x.ws === ws)
            user?.rooms.push(parsedData.roomId)
        }

        if (parsedData.type === "leave_room") {
            console.log("parsedData.type = ", parsedData.type)
            const user = users.find(x => x.ws === ws);
            if (!user) {
                return
            }
            user.rooms = user?.rooms.filter(x => x === parsedData.room)
        }

        if (parsedData.type === "chat") {
            console.log("parsedData.type = ", parsedData.type)
            const roomId = parsedData.roomId;
            const message = parsedData.message

            await prismaClient.chat.create({
                data: {
                    roomId,
                    message,
                    userId
                }
            })

            users.forEach(user => {
                if (user.rooms.includes(roomId)) {
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message,
                        roomId
                    }))
                }
            })
        }

    });
});