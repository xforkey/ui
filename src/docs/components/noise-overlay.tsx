"use client";

import { useEffect } from "react";

export default function NoiseOverlay() {
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
            opacity: "0.6",
            mixBlendMode: "normal", // Blend mode for a subtle effect
        });

        document.body.appendChild(div);

        return () => {
            const existing = document.getElementById("noise-overlay");
            if (existing) document.body.removeChild(existing);
        };
    }, []);

    return null;
}
