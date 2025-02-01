import express from "express";
import { Room, Signin, Signup } from "../controllers";
import { middleware } from "../middleware";

const router = express.Router();

console.log("Hello form routes")

router.post("/signup", Signup)
router.post("/signin", Signin)
router.post("/room", middleware, Room)

export default router