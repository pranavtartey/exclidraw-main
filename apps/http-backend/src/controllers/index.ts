import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from "@repo/common/types";

export const Signup = (req: Request, res: Response) => {
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Invalid inputs"
        })
        return
    }
    //db-call
    res.json({
        userId: 123
    })
}

export const Signin = (req: Request, res: Response) => {
    const data = SigninSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Invalid inputs"
        })
        return
    }
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json(token)
}
export const Room = (req: Request, res: Response) => {
    const data = CreateRoomSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Invalid inputs"
        })
        return
    }
    //db-call
    res.json({
        roomId: 123
    })
}
