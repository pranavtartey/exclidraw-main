import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type USPCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
};

const USPCard = ({ title, description, image }: USPCardProps) => {
  return (
    <div className="p-4 w-full sm:w-96 lg:w-[290px] mx-auto">
      <div className="mb-2">
        <Image src={image} alt="usp-card-image" className="w-8" />
      </div>
      <div>
        <h3 className="text-neutral-300 text-lg font-medium tracking-wide mb-1">
          {title}
        </h3>
        <p className="text-neutral-400 max-w-sm">{description}</p>
      </div>
    </div>
  );
};

export default USPCard;
