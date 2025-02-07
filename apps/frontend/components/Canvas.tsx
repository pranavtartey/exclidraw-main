"use client";
import Draw from "@/draw";
import { useEffect, useRef } from "react";

export function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      Draw(canvasRef.current, roomId, socket);
    }
  }, [canvasRef]);
  return (
    <div className="relative">
      <canvas className="" ref={canvasRef} width={700} height={700}></canvas>
      <div className="absolute bottom-0 right-0">
        <button className="bg-white">Rect</button>
        <button className="bg-white">Circle</button>
      </div>
    </div>
  );
}
