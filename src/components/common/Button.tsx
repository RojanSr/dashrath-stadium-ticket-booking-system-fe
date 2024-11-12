import { cn } from "@utils/cn";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "full";
  className?: React.ComponentProps<"button">["className"];
}>;

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full", // Base style applied to all
        {
          // Variant-based styles
          "bg-primary_dark text-secondary": variant === "primary",
          "bg-secondary text-red": variant === "secondary",

          // Size-based styles
          "px-3 py-2 text-sm": size === "sm",
          "px-6 py-2": size === "md",
          "px-8 py-3": size === "lg",
          "w-full py-2": size === "full",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
