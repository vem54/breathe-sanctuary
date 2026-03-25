import { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide uppercase transition-all duration-300";
  const sizes = {
    default: "px-8 py-3 text-xs",
    lg: "px-10 py-4 text-sm",
  };
  const variants = {
    primary:
      "bg-forest text-warm-white hover:bg-forest-light",
    outline:
      "border border-sand text-charcoal hover:border-charcoal",
  };

  return (
    <a
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
