"use client";

import { useState } from "react";
import Image from "next/image";

const FALLBACK_IMG = "/images/og-default.webp";

/** 详情页 Hero 图（client 包装）：加载失败自动切通用品牌图，避免破图 */
export function RecipeHeroImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority
      sizes="(min-width: 1024px) 896px, 100vw"
      className="object-cover"
      onError={() => imgSrc !== FALLBACK_IMG && setImgSrc(FALLBACK_IMG)}
    />
  );
}
