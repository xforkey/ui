"use client";

import React from "react";
import { Example } from "./preview";

interface ResizableProps {
  children: React.ReactNode;
  className?: string;
}

export function Resizable({ children, className }: ResizableProps) {
  return (
    <Preview resizable={true} className={className}>
      {children}
    </Preview>
  );
}