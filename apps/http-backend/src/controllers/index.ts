import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client"

export const Signup = async (req: Request, res: Response) => {
    const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log("error: ", parsedData.error)
        res.json({
            message: "Invalid inputs"
        })
        return
    }

    const { username, name, password } = parsedData.data
    try {
        const user = await prismaClient.user.create({
            data: {
                email: username,
                name,
                password,
            }
        })
        res.json({
            userId: user.id
        })
    } catch (err) {
        res.status(411).json({
            message: "User already exists"
        })
    }
}

export const Signin = async (req: Request, res: Response) => {
    const parsedData = SigninSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log("error: ", parsedData.error)
        res.json({
            message: "Invalid inputs"
        })
        return
    }

    const { username, password } = parsedData.data

    try {
        const user = await prismaClient.user.findFirst({
            where: {
                email: username,
                password
            }
        })

        if (!user) {
            res.status(403).json({
                message: "Not authorized"
            })
            return
        }

        const token = jwt.sign({ userId: user?.id }, JWT_SECRET)

        res.json({
            token
        })
        return

    } catch (err) {
        res.json({
            message: "something went wrong in the signin controller"
        })
    }
}
export const Room = async (req: Request, res: Response) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log("error: ", parsedData.error)
        res.json({
            message: "Invalid inputs"
        })
        return
    }
    try {

        const userId = req.userId
        const { name } = parsedData.data;
        const room = await prismaClient.room.create({
            data: {
                slug: name,
                adminId: userId
            }
        })
        res.json({
            roomId: room.id
        })
    } catch (err) {
        res.json({
            message: "something went wrong in the room controller"
        })
    }
}


export const getAllMessages = async (req: Request, res: Response) => {
    const roomId = Number(req.params.roomId);

    const messages = await prismaClient.chat.findMany({
        where: {
            roomId
        },
        orderBy: {
            id: "desc"
        },
        take: 50
    })

    res.json({
        messages
    })
}