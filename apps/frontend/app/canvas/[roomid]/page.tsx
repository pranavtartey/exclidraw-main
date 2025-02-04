"use client";
import { FC, useEffect, useRef } from "react";

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return;
      }
      let clicked = false;
      let startX = 0;
      let startY = 0;

      canvas.addEventListener("mousedown", (e) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
        // console.log(e.clientX);
        // console.log(e.clientY);
      });
      canvas.addEventListener("mouseup", (e) => {
        clicked = false;
        // console.log(e.clientX);
        // console.log(e.clientY);
      });
      canvas.addEventListener("mousemove", (e) => {
        if (clicked) {
          const width = e.clientX - startX;
          const height = e.clientY - startY;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeRect(startX, startY, width, height);

          console.log(e.clientX);
          console.log(e.clientY);
        }
      });
    }
  }, [canvasRef]);

  return (
    <canvas
      className="bg-neutral-800"
      ref={canvasRef}
      width={700}
      height={700}
    ></canvas>
  );
};

export default Canvas;
