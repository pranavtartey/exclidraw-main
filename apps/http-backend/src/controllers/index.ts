import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config";


export const Signup = (req: Request, res: Response) => {
    //db-call
    res.json({
        userId: 123
    })
}

export const Signin = (req: Request, res: Response) => {
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json(token)
}
export const Room = (req: Request, res: Response) => {
    //db-call
    res.json({
        roomId: 123
    })
}
