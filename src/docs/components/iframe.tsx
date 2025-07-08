"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";

const css = String.raw;

export function Iframe({ children, ...props }: React.ComponentProps<"iframe">) {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  const { resolvedTheme: theme } = useTheme();
  useEffect(() => {
    if (!mountNode) return;
    mountNode.className = theme as string;

    // We need to add `light` or `dark` to the <html> element in the iframe
    // for Safari to work properly
    const root = mountNode.getRootNode() as Document;
    if (root) {
      root.documentElement.className = theme as string;
    }
  }, [mountNode, theme]);

  // Ensure all <link rel="stylesheet"> elements are cloned inside the iframe
  const ref = (element: HTMLIFrameElement) => {
    if (!element) {
      return;
    }

    const innerDocument = element.contentWindow?.document;
    if (!innerDocument) {
      return;
    }
    const mountNode = innerDocument.body;

    const styles = document.querySelectorAll("link[rel=stylesheet]");
    for (const style of styles) {
      const clone = style.cloneNode(true);
      innerDocument.head.appendChild(clone);
    }

    const iframeStyles = innerDocument.createElement("style");
    iframeStyles.innerHTML = css`
      html,
      body {
        background-color: transparent;
      }
    `;
    mountNode.appendChild(iframeStyles);

    setMountNode(mountNode);
  };

  return (
    // @ts-expect-error - allowtransparency is not in React types but is valid HTML
    <iframe {...props} ref={ref} allowtransparency="true">
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}
