import canvas_0_ss from "@/assets/canvas_0_ss.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="mb-12">
          <h2 className="section-heading py-4 mb-4">
            Increase your <span className="text-rose-600">productivity</span>
          </h2>
          <p className="section-description ">
            Setup the discussion with others productive minds. Gather the ideas
            while we help you represent them seamlessly.
          </p>
        </div>
        <div className="border border-neutral-500 p-4 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent_80%)] relative">
            <div className="absolute top-[30%] h-10 md:h-20 lg:h-36 w-20 md:w-40 lg:w-60 border border-neutral-400"/>
            <div className="absolute top-[20%] left-[40%] h-20 md:h-40 lg:h-60 w-20 md:w-40 lg:w-60 rounded-full border border-neutral-400"/>
            <div className="absolute top-[20%] left-[40%] h-32 md:h-64 lg:h-80 w-8 md:w-16 lg:w-32 border border-neutral-400"/>
            <div className="absolute top-[20%] right-[20%] h-20 md:h-40 lg:h-60 w-14 md:w-36 lg:w-60 border border-neutral-400"/>
            <div className="absolute top-[10%] right-[10%] h-20 md:h-40 lg:h-60 w-14 md:w-32 lg:w-48 border border-neutral-400 rounded-full"/>
          <Image src={canvas_0_ss} alt="product-image" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
