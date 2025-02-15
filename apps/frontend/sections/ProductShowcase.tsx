"use client";
import canvas_0_ss from "@/assets/canvas_0_ss.png";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const translateZ1 = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const translateZ2 = useTransform(scrollYProgress, [0.2, 0.4], [300, 0]);
  const translateZ3 = useTransform(scrollYProgress, [0.4, 0.6], [300, 0]);
  const translateZ4 = useTransform(scrollYProgress, [0.6, 0.8], [300, 0]);
  const translateZ5 = useTransform(scrollYProgress, [0.8, 0.9], [300, 0]);

  const translateX1 = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const translateX2 = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
  const translateX3 = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);
  const translateX4 = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);
  const translateX5 = useTransform(scrollYProgress, [0.8, 0.9], [100, 0]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const opacity5 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  const transformTemplate1 = useMotionTemplate`translateZ(${translateZ1}px) translateX(${translateX1}px)`;
  const transformTemplate2 = useMotionTemplate`translateZ(${translateZ2}px) translateX(${translateX2}px)`;
  const transformTemplate3 = useMotionTemplate`translateZ(${translateZ3}px) translateX(${translateX3}px)`;
  const transformTemplate4 = useMotionTemplate`translateZ(${translateZ4}px) translateX(${translateX4}px)`;
  const transformTemplate5 = useMotionTemplate`translateZ(${translateZ5}px) translateX(${translateX5}px)`;

  return (
    <section className="pt-[72px]">
      <div ref={sectionRef} className="h-[300dvh]">
        <div className="container sticky top-14">
          <div className="mb-12">
            <h2 className="section-heading py-4 mb-4">
              Increase your <span className="text-rose-600">productivity</span>
            </h2>
            <p className="section-description ">
              Setup the discussion with others productive minds. Gather the
              ideas while we help you represent them seamlessly.
            </p>
          </div>

          <motion.div className="border border-neutral-500 p-4 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent_80%)] relative [perspective:800px] [transform-style:preserve-3d] [perspective-origin:bottom] overflow-hidden">
            <motion.div
              className="absolute top-[30%] h-10 md:h-20 lg:h-36 w-20 md:w-40 lg:w-60 border-2 border-neutral-400"
              style={{
                transform: transformTemplate1,
                opacity: opacity1,
              }}
            />
            <motion.div
              className="absolute top-[20%] left-[40%] h-20 md:h-40 lg:h-60 w-20 md:w-40 lg:w-60 rounded-full border-2 border-neutral-400"
              style={{
                transform: transformTemplate2,
                opacity: opacity2,
              }}
            />
            <motion.div
              className="absolute top-[20%] left-[40%] h-32 md:h-64 lg:h-80 w-8 md:w-16 lg:w-32 border-2 border-neutral-400"
              style={{
                transform: transformTemplate3,
                opacity: opacity3,
              }}
            />

            <motion.div
              className="absolute top-[20%] right-[20%] h-20 md:h-40 lg:h-60 w-14 md:w-36 lg:w-60 border-2 border-neutral-400"
              style={{
                transform: transformTemplate4,
                opacity: opacity4,
              }}
            />
            <motion.div
              className="absolute top-[10%] right-[10%] h-20 md:h-40 lg:h-60 w-14 md:w-32 lg:w-48 border-2 border-neutral-400 rounded-full"
              style={{
                transform: transformTemplate4,
                opacity: opacity5,
              }}
            />
            <Image src={canvas_0_ss} alt="product-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
