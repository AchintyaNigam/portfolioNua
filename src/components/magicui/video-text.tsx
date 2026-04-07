"use client";

import { cn } from "@/lib/utils";
import React, { ElementType, ReactNode, useEffect, useState } from "react";

export interface VideoTextProps {
  src: string;
  imageSrc: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  children: ReactNode;
  fontSize?: string | number;
  fontWeight?: string | number;
  textAnchor?: string;
  dominantBaseline?: string;
  fontFamily?: string;
  as?: ElementType;
}

export function VideoText({
  src,
  imageSrc,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  as: Component = "div",
}: VideoTextProps) {
  const [fillMask, setFillMask] = useState("");
  const [strokeMask, setStrokeMask] = useState("");

  const content = React.Children.toArray(children).join("");

  useEffect(() => {
    const updateMasks = () => {
      const responsiveFontSize =
        typeof fontSize === "number" ? `${fontSize}vw` : fontSize;

      // 🪙 FILL MASK (solid text)
      const fillSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='0%' height='0%'>
        <text 
          x='50%' 
          y='50%' 
          font-size='${responsiveFontSize}' 
          font-weight='${fontWeight}' 
          text-anchor='${textAnchor}' 
          dominant-baseline='${dominantBaseline}' 
          font-family='${fontFamily}'
          letter-spacing='10'
        >
          ${content}
        </text>
      </svg>`;

      // 🎬 STROKE MASK (outline only)
      const strokeSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
        <text 
          x='50%' 
          y='50%' 
          font-size='${responsiveFontSize}' 
          font-weight='${fontWeight}' 
          text-anchor='${textAnchor}' 
          dominant-baseline='${dominantBaseline}' 
          font-family='${fontFamily}' 
          stroke='white'
          stroke-width='5'
          paint-order='stroke'
          letter-spacing='8'
        >
          ${content}
        </text>
      </svg>`;

      setFillMask(fillSvg);
      setStrokeMask(strokeSvg);
    };

    updateMasks();
    window.addEventListener("resize", updateMasks);
    return () => window.removeEventListener("resize", updateMasks);
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

  const fillMaskUrl = `url("data:image/svg+xml,${encodeURIComponent(fillMask)}")`;
  const strokeMaskUrl = `url("data:image/svg+xml,${encodeURIComponent(strokeMask)}")`;

  return (
    <Component className={cn("relative size-full overflow-hidden", className)}>

      {/* 🪙 Metallic Fill Layer */}
      <div
        className="absolute inset-0 bg-sky-800"
        style={{
          maskImage: fillMaskUrl,
          WebkitMaskImage: fillMaskUrl,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          filter: "contrast(140%) brightness(120%)",
      }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="shine-layer" />
        </div>
      </div>


      {/* 🎬 Video Outline Layer */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: strokeMaskUrl,
          WebkitMaskImage: strokeMaskUrl,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Accessibility fallback */}
      <span className="sr-only">{content}</span>
    </Component>
  );
}
