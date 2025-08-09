import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";

// Import all thumbnails
import SmileCare from "@/public/images/thumbnails/SmileCare.webp";
import AniQuinch from "@/public/images/thumbnails/AniQuinch.webp";
import BankingSystem from "@/public/images/thumbnails/OnlyFunds.webp";
import HueFit from "@/public/images/thumbnails/HueFitWeb.webp";
import PeerToPeerDeliverySystem from "@/public/images/thumbnails/Pasabuy.webp";
import Thryve from "@/public/images/thumbnails/Thryve.webp";

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
