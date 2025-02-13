import { z } from "zod"

export const CreateUserSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(3),
    name: z.string().min(3)
})

export const SigninSchema = z.object(
    {
        username: z.string().min(3),
        password: z.string().min(3)
    }
)

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20)
})