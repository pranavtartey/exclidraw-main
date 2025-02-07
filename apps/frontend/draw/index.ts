// import { GetExisitingShapes } from "@/app/canvas/[roomid]/page";
import { HTTP_BACKEND } from "@/config";
import axios from "axios";
import { stringify } from "querystring";

type Shape = {
    type: "rect",
    x: number,
    y: number,
    width: number,
    height: number
} | {
    type: "circle",
    centerX: number,
    centerY: number,
    radius: number
}


const Draw = async (canvas: HTMLCanvasElement, roomId: string, socket: WebSocket) => {
    const ctx = canvas.getContext("2d");

    let existingShapes: Shape[] = await GetExisitingShapes(roomId)
    console.log("Thsi is your existing shapes array: ", existingShapes)
    if (!ctx) {
        return;
    }

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data)
        console.log("This is your message from Draw/index.ts file: ", message);
        if (message.type === "chat") {
            const parsedShape = JSON.parse(message.message)
            console.log("This is your parsed shape : ", parsedShape.shape)
            existingShapes.push(parsedShape.shape)
            ClearCanvas(existingShapes, canvas, ctx)
        }
    }

    let clicked = false;
    let startX = 0;
    let startY = 0;
    ClearCanvas(existingShapes, canvas, ctx)

    canvas.addEventListener("mousedown", (e) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
        // console.log(e.clientX);
        // console.log(e.clientY);
    });
    canvas.addEventListener("mouseup", (e) => {
        clicked = false;
        const width = e.clientX - startX
        const height = e.clientY - startY
        const shape: Shape = {
            type: "rect",
            x: startX,
            y: startY,
            height,
            width
        }
        existingShapes.push(shape)

        socket.send(JSON.stringify({
            type: "chat",
            message: JSON.stringify({
                shape
            }),
            roomId
        }))

        // console.log(e.clientX);
        // console.log(e.clientY);
    });
    canvas.addEventListener("mousemove", (e) => {
        if (clicked) {
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            ClearCanvas(existingShapes, canvas, ctx)
            ctx.strokeStyle = "rgba(255,255,255)";
            ctx.strokeRect(startX, startY, width, height);

            console.log(e.clientX);
            console.log(e.clientY);
        }
    });
}

const ClearCanvas = (existingShapes: Shape[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    existingShapes.map((shape) => {
        if (shape.type === "rect") {
            ctx.strokeStyle = "rgba(255,255,255)"
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
        }
    })
}

const GetExisitingShapes = async (roomId: string) => {
    const res = await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);
    const messages = res.data.messages;

    const shapes = messages.map((x: { message: string }) => {
        const messageData = JSON.parse(x.message);
        return messageData.shape;
    });
    return shapes;
};

export default Draw