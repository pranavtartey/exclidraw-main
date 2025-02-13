import lowLatency from "@/assets/low-latency.png";
import productivity from "@/assets/productivity.png"
import shapes from "@/assets/shapes.png"
import { StaticImageData } from "next/image";

type USPDataType = {
    title: string,
    description: string,
    image: StaticImageData
}

export const USPData: USPDataType[] = [
    {
        title: "Low Latency",
        description: "We offer the low latency as we use the technologies like native web sockets and do not rely on the external libraries.",
        image: lowLatency
    },
    {
        title: "Increase Prouctivity",
        description: "With this tool you only think of ideas we will handle the presentation as we have all the tools you'll ever need.",
        image: productivity
    },
    {
        title: "Draw Vectors",
        description: "You can draw your own vectors to support your idea representation. We keep adding new shapes to make your experience smoother",
        image: shapes
    },
]