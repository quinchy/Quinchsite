import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";

// Import all thumbnails
import SmileCare from "@/public/images/thumbnails/smile-care.webp";
import AniQuinch from "@/public/images/thumbnails/ani-quinch.webp";
import BankingSystem from "@/public/images/thumbnails/only-funds.webp";
import HueFit from "@/public/images/thumbnails/hue-fit-web.webp";
import PeerToPeerDeliverySystem from "@/public/images/thumbnails/pasabuy.webp";
import Thryve from "@/public/images/thumbnails/thryve.webp";

// Shared thumbnail mapping
export const thumbnails: Record<string, StaticImageData> = {
  SmileCare,
  AniQuinch,
  BankingSystem,
  HueFit,
  PeerToPeerDeliverySystem,
  Thryve,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
