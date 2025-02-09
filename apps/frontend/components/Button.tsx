import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  varient: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ varient }) => {
  return <button></button>;
};

export default Button;
