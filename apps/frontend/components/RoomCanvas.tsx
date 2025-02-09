"use client";

import { WS_BACKEND } from "@/config";
import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";

const RoomCanvas = ({ roomId }: { roomId: string }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_BACKEND}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NDM0YTM5YS03NjcxLTQ0MTAtOTFkNy04ZTA3NjZjYTI0MDEiLCJpYXQiOjE3MzkwODIzMDN9.7k7J4mWMOoSIdCKFsUUiCBm6EMPpLVtrm1cbYz3ZCxk`
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
