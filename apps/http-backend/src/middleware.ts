import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";

export const middleware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers["authorization"] ?? ""
try{

    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded) {
        req.userId = (decoded as JwtPayload).userId;
        next()
    } else {
        res.status(403).json({
            message: "Unauthorized"
        })
    }
}catch(err){
    res.status(403).json({
        message : "something went wrong in the middleware"
    })
}


}

//jwt.verify takes the first argument as string only but our headers can be either string or undefined so we also give a fallback string as the empty string if we get undefined from the req.headers