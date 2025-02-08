"use client";

import { WS_BACKEND } from "@/config";
import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";

const RoomCanvas = ({ roomId }: { roomId: string }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_BACKEND}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NjY3NDIxNy1mZjIwLTQyMmYtYTRlMS0wYTVlNzljMmViY2IiLCJpYXQiOjE3MzkwMDM5MDZ9.WJ3wNKnE8R7ipwgy-X7EeMowdcZ1zs_D4P7LAsr1TE0`
    );
    ws.onopen = () => {
      setSocket(ws);
      ws.send(
        JSON.stringify({
          type: "join_room",
          roomId,
        })
      );
    };
  }, []);

  if (!socket) {
    return <div>Connecting to the server</div>;
  }

  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />
    </div>
  );
};

export default RoomCanvas;
