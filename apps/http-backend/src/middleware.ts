import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "./config";

interface DecodedToken extends JwtPayload {
    userId: string
}

export const middleware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers["authorization"] ?? ""

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken

    if (decoded) {
        req.userId = decoded.userId;
    } else {
        res.status(403).json({
            message: "Unauthorized"
        })
    }

}

//jwt.verify takes the first argument as string only but our headers can be either string or undefined so we also give a fallback string as the empty string if we get undefined from the req.headers