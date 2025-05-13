"use client";

import React from "react";
import { Example } from "./example";

interface ResizableProps {
  children: React.ReactNode;
  className?: string;
}

export function Resizable({ children, className }: ResizableProps) {
  return (
    <Example resizable={true} className={className}>
      {children}
    </Example>
  );
}