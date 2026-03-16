import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  hover = true,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden ${
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
