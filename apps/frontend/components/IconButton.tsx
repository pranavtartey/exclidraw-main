import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

type IconButtonProps = {
  icon: React.ReactNode,
  active: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProps> = ({ icon, onClick , active}) => {
  return (
    <div className={twMerge("pointer rounded-lg flex items-center justify-center hover:bg-neutral-600 transition p-1", active && "bg-neutral-600")}>
      <button onClick={onClick}>{icon}</button>
    </div>
  );
};

export default IconButton;
