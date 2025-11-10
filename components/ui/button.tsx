import * as React from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const base =
  "inline-flex items-center justify-center font-medium rounded-2xl border border-white/10 transition-colors shadow-sm";

const v: Record<Variant, string> = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "bg-white/5 text-white hover:bg-white/10",
};

const s: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-5 text-base",
};

export function Button({ className = "", variant = "primary", size = "md", ...props }: Props) {
  return (
    <button className={`${base} ${v[variant]} ${s[size]} ${className}`} {...props} />
  );
}
