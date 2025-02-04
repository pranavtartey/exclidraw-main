"use client";
import Draw from "@/draw";
import { FC, useEffect, useRef } from "react";

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      Draw(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <canvas className="" ref={canvasRef} width={700} height={700}></canvas>
  );
};

export default Canvas;
