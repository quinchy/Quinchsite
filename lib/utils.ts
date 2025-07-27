import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";

// Import all thumbnails
import AppointmentSystem from "@/public/images/appointment_system.png";
import AniQuinch from "@/public/images/aniquinch_ecommerce.png";
import BankingSystem from "@/public/images/banking_system.png";
import HueFit from "@/public/images/huefit_web.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import Zentry from "@/public/images/zentry_hris.png";
import Thryve from "@/public/images/dating_site.png";

// Shared thumbnail mapping
export const thumbnails: Record<string, StaticImageData> = {
  AppointmentSystem,
  AniQuinch,
  BankingSystem,
  HueFit,
  PeerToPeerDeliverySystem,
  Zentry,
  Thryve,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
