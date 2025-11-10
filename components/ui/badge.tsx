import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
};

export function Badge({ className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-xl bg-white/10 px-2.5 py-1 text-xs ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
