import express from "express";
import { getAllMessages, Room, roomDetails, Signin, Signup } from "../controllers";
import { middleware } from "../middleware";

const router = express.Router();

console.log("Hello form routes")

router.post("/signup", Signup)
router.post("/signin", Signin)
router.post("/room", middleware, Room)
router.get("/chats/:roomId", getAllMessages)
router.get("/room/:slug", roomDetails)

export default router