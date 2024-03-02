"use client";

import { ReactNode } from "react";
import { classJoin } from "@repo/utils/classJoin";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={classJoin(["bg-red-400 rounded-lg p-2", className])}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
