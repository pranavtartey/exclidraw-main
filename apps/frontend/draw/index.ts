import { headers } from "next/headers";

type Shape = {
    type: "rect",
    x: number,
    y: number,
    width: number,
    height: number
} | {
    type: "circle",
    centerX: number,
    centerY: number,
    radius: number
}


const Draw = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");

    let existingShapes: Shape[] = []

    if (!ctx) {
        return;
    }
    let clicked = false;
    let startX = 0;
    let startY = 0;
    ctx.fillStyle = "rgba(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener("mousedown", (e) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
        // console.log(e.clientX);
        // console.log(e.clientY);
    });
    canvas.addEventListener("mouseup", (e) => {
        clicked = false;
        const width = e.clientX - startX
        const height = e.clientY - startY
        existingShapes.push({
            type: "rect",
            height,
            width,
            x: startX,
            y: startY
        })
        // console.log(e.clientX);
        // console.log(e.clientY);
    });
    canvas.addEventListener("mousemove", (e) => {
        if (clicked) {
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            ClearCanvas(existingShapes, canvas, ctx)
            ctx.strokeStyle = "rgba(255,255,255)";
            ctx.strokeRect(startX, startY, width, height);

            console.log(e.clientX);
            console.log(e.clientY);
        }
    });
}

const ClearCanvas = (existingShapes: Shape[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    existingShapes.map((shape) => {
        if (shape.type === "rect") {
            ctx.strokeStyle = "rgba(255,255,255)"
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
        }
    })
}

export default Draw