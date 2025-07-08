"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function NoiseOverlay() {
    const { resolvedTheme } = useTheme();
    const opacity = resolvedTheme === "dark" ? 0.4 : 0.2; // Adjust opacity based on theme
    useEffect(() => {
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 256;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const imgData = ctx.createImageData(canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = Math.random() * 255;     // R
            imgData.data[i + 1] = Math.random() * 255; // G
            imgData.data[i + 2] = Math.random() * 255; // B
            imgData.data[i + 3] = 100 - (40 + Math.random() * (100 - 40));// A
        }
        ctx.putImageData(imgData, 0, 0);
        const dataUrl = canvas.toDataURL();

        const div = document.createElement("div");
        div.id = "noise-overlay";
        Object.assign(div.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: "-10", // Adjust to avoid covering content
            backgroundImage: `url(${dataUrl})`,
            backgroundSize: "256px 256px",
            backgroundRepeat: "repeat",
            opacity,
            mixBlendMode: "normal", // Blend mode for a subtle effect
        });

        document.body.appendChild(div);

        const shine = document.createElement("div");
        shine.id = "shine-overlay";
        Object.assign(shine.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: "-9",
            background: "radial-gradient(circle at 65% 60%, rgba(255,255,255,0.20), transparent 70%)",
            mixBlendMode: "screen",
        });
        document.body.appendChild(shine);

        return () => {
            const existing = document.getElementById("noise-overlay");
            if (existing) document.body.removeChild(existing);
            const shine = document.getElementById("shine-overlay");
            if (shine) document.body.removeChild(shine);
        };
    }, []);

    return null;
}
