import AuthPage from "@/components/AuthPage"
import { FC } from "react"

const Signup:FC = () => {
    return (
        <AuthPage isSignin={false}/>
    )
}

export default Signup