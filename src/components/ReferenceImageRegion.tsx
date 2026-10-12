import Image from "next/image";
import type { ImageRegion } from "@/content/reference-artwork";

export default function ReferenceImageRegion({
  region,
  className = "",
  priority = false,
}: {
  region: ImageRegion;
  className?: string;
  priority?: boolean;
}) {
  const exclusion = region.excludedLeft;
  const x = exclusion ? (exclusion.width / region.width) * 100 : 0;
  const top = exclusion ? (exclusion.top / region.height) * 100 : 0;
  const bottom = exclusion
    ? ((exclusion.top + exclusion.height) / region.height) * 100
    : 0;
  const clipPath = exclusion
    ? `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${bottom}%, ${x}% ${bottom}%, ${x}% ${top}%, 0 ${top}%)`
    : undefined;
  return (
    <div
      className={`reference-region ${className}`}
      data-source={region.src}
      data-source-crop={`${region.x},${region.y},${region.width},${region.height}`}
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: `${region.width}/${region.height}`,
        clipPath,
      }}
      aria-hidden="true"
    >
      <Image
        src={region.src}
        alt=""
        width={1024}
        height={1536}
        priority={priority}
        unoptimized
        loading={priority ? undefined : "eager"}
        draggable={false}
        style={{
          position: "absolute",
          maxWidth: "none",
          width: `${(1024 / region.width) * 100}%`,
          height: "auto",
          left: `${(-region.x / region.width) * 100}%`,
          top: `${(-region.y / region.height) * 100}%`,
        }}
      />
    </div>
  );
}
