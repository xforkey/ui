"use client";

import React from "react";

interface ResizableProps {
  children: React.ReactNode;
  className?: string;
}

export function Resizable({ children, className }: ResizableProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}