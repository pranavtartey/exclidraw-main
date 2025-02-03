import { useEffect, useState } from "react";
import { WS_URL } from "../config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0YjMzODM0ZS02ZTRmLTQzNjItOTAxNC0zY2ZkM2UwMzNhZmEiLCJpYXQiOjE3Mzg2MTA3NDl9.Pn45Qrvn4MvmqrfVypoU6m8kfZLqKxdOKjVf8RXZknY`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws)
        }
    }, [])


    return {
        socket,
        loading
    }

}