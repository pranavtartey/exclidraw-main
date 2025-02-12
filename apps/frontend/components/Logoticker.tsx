import { motion } from "framer-motion";
import TypeScriptLogo from "@/assets/typescript-png.png";
import NodeJsLogo from "@/assets/nodejs-png.png";
import PostgreSQLLogo from "@/assets/postgres-png.png";
import NextJSLogo from "@/assets/nextjs-png.png";
import PrismaLogo from "@/assets/prisma-png.png";
import DockerLogo from "@/assets/docker-png.png";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div className="mx-auto">
        <Image src={TypeScriptLogo} alt="ts-logo" width={70} className="w-16" />
      </div>
      <div className="mx-auto">
        <Image src={NodeJsLogo} alt="node-logo" width={120} className="w-32" />
      </div>
      <div className="mx-auto">
        <Image
          src={PostgreSQLLogo}
          alt="postgres-logo"
          width={70}
          className="w-16"
        />
      </div>
      <div className="mx-auto">
        <Image src={NextJSLogo} alt="next-logo" width={70} className="w-16 " />
      </div>
      <div className="mx-auto">
        <Image src={PrismaLogo} alt="prisma-logo" width={70} className="w-16" />
      </div>
      <div className="mx-auto">
        <Image src={DockerLogo} alt="docker-logo" width={70} className="w-16" />
      </div>
    </div>
  );
};

export default LogoTicker;
