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
  const cutX = exclusion ? (exclusion.width / region.width) * 100 : 0;
  const fadeX = exclusion ? ((exclusion.width + 40) / region.width) * 100 : 0;
  const cutTop = exclusion ? (exclusion.top / region.height) * 100 : 0;
  const fadeTop = exclusion
    ? (Math.max(0, exclusion.top - 48) / region.height) * 100
    : 0;
  const cutBottom = exclusion
    ? ((exclusion.top + exclusion.height) / region.height) * 100
    : 0;
  const fadeBottom = exclusion
    ? (Math.min(region.height, exclusion.top + exclusion.height + 50) /
        region.height) *
      100
    : 0;
  // The two allowed regions form a union. The raster-text rectangle remains
  // fully transparent; only its text-free outside edge is feathered.
  const pixelMask = exclusion
    ? {
        maskImage: `linear-gradient(90deg, transparent ${cutX}%, #000 ${fadeX}%), linear-gradient(180deg, #000 ${fadeTop}%, transparent ${cutTop}%, transparent ${cutBottom}%, #000 ${fadeBottom}%)`,
        maskComposite: "add",
      }
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
      }}
      aria-hidden="true"
    >
      <div
        className="reference-pixels"
        style={{ position: "absolute", inset: 0, ...pixelMask }}
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
    </div>
  );
}
