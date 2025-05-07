"use client";

import { usePathname } from "next/navigation";
import Background from "@/components/Background";

export default function BackgroundWrapper() {
  const pathname = usePathname();
  // hide background on about page
  if (pathname.includes("/about")) return null;
  return <Background />;
}
