"use client";
import Draw from "@/draw";
import { useEffect, useRef, useState } from "react";
import IconButton from "./IconButton";
import { IconCircle, IconLine, IconRectangle } from "@tabler/icons-react";

type Shape = "circle" | "rect" | "line";

export function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [selectedTool, setSelectedTool] = useState<Shape>("circle");

  useEffect(() => {
    if (canvasRef.current) {
      Draw(canvasRef.current, roomId, socket);
    }
  }, [canvasRef]);
  return (
    <div className="relative h-[100dvh] overflow-hidden">
      <canvas
        className=""
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
      <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>
  );
}

const TopBar = ({
  selectedTool,
  setSelectedTool,
}: {
  selectedTool: Shape;
  setSelectedTool: (s: Shape) => void;
}) => {
  return (
    <div className="fixed flex justify-center items-center gap-2 top-10 left-1/2 p-2 -translate-x-1/2 bg-neutral-700 rounded-lg">
      <IconButton
        active={selectedTool === "rect"}
        icon={<IconRectangle color="#E02424" />}
        onClick={() => {
          setSelectedTool("rect");
        }}
      />
      <IconButton
        active={selectedTool === "circle"}
        icon={<IconCircle color="#E02424" />}
        onClick={() => {
          setSelectedTool("circle");
        }}
      />
      <IconButton
        active={selectedTool === "line"}
        icon={<IconLine color="#E02424" />}
        onClick={() => {
          setSelectedTool("line");
        }}
      />
    </div>
  );
};
