import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";

// Import all thumbnails
import SmileCare from "@/public/images/thumbnails/smile-care/smile-care.webp";
import AniQuinch from "@/public/images/thumbnails/ani-quinch/ani-quinch.webp";
import BankingSystem from "@/public/images/thumbnails/only-funds/only-funds.webp";
import HueFit from "@/public/images/thumbnails/hue-fit/hue-fit.webp";
import PeerToPeerDeliverySystem from "@/public/images/thumbnails/pasabuy/pasabuy.webp";
import Thryve from "@/public/images/thumbnails/thryve/thryve.webp";
import SalesAgent from "@/public/images/thumbnails/sales-agent/sales-agent.webp";

// Import per-project gallery PNGs
// SalesAgent
import SA1 from "@/public/images/thumbnails/sales-agent/sales-agent-1.png";
import SA2 from "@/public/images/thumbnails/sales-agent/sales-agent-2.png";
import SA3 from "@/public/images/thumbnails/sales-agent/sales-agent-3.png";
import SA4 from "@/public/images/thumbnails/sales-agent/sales-agent-4.png";
// Thryve
import TH1 from "@/public/images/thumbnails/thryve/thryve-1.png";
import TH2 from "@/public/images/thumbnails/thryve/thryve-2.png";
import TH3 from "@/public/images/thumbnails/thryve/thryve-3.png";
import TH4 from "@/public/images/thumbnails/thryve/thryve-4.png";
// HueFit
import HF1 from "@/public/images/thumbnails/hue-fit/hue-fit-1.png";
import HF2 from "@/public/images/thumbnails/hue-fit/hue-fit-2.png";
import HF3 from "@/public/images/thumbnails/hue-fit/hue-fit-3.png";
import HF4 from "@/public/images/thumbnails/hue-fit/hue-fit-4.png";
import HF5 from "@/public/images/thumbnails/hue-fit/hue-fit-5.png";
import HF6 from "@/public/images/thumbnails/hue-fit/hue-fit-6.png";
// Pasabuy
import PB1 from "@/public/images/thumbnails/pasabuy/pasabuy-1.png";
import PB2 from "@/public/images/thumbnails/pasabuy/pasabuy-2.png";
// SmileCare
import SC1 from "@/public/images/thumbnails/smile-care/smile-care-1.png";
import SC2 from "@/public/images/thumbnails/smile-care/smile-care-2.png";
import SC3 from "@/public/images/thumbnails/smile-care/smile-care-3.png";
import SC4 from "@/public/images/thumbnails/smile-care/smile-care-4.png";
// OnlyFunds
import OF1 from "@/public/images/thumbnails/only-funds/only-funds-1.png";
import OF2 from "@/public/images/thumbnails/only-funds/only-funds-2.png";
import OF3 from "@/public/images/thumbnails/only-funds/only-funds-3.png";
import OF4 from "@/public/images/thumbnails/only-funds/only-funds-4.png";
// AniQuinch
import AQ1 from "@/public/images/thumbnails/ani-quinch/ani-quinch-1.png";
import AQ2 from "@/public/images/thumbnails/ani-quinch/ani-quinch-2.png";
import AQ3 from "@/public/images/thumbnails/ani-quinch/ani-quinch-3.png";
import AQ4 from "@/public/images/thumbnails/ani-quinch/ani-quinch-4.png";

// Shared thumbnail mapping
export const thumbnails: Record<string, StaticImageData> = {
  SmileCare,
  AniQuinch,
  BankingSystem,
  HueFit,
  PeerToPeerDeliverySystem,
  Thryve,
  SalesAgent,
};

export type ProjectGallery = {
  thumbnail: StaticImageData;
  images: StaticImageData[];
};

export const projectGalleries: Record<string, ProjectGallery> = {
  SalesAgent: { thumbnail: SalesAgent, images: [SA1, SA2, SA3, SA4] },
  Thryve: { thumbnail: Thryve, images: [TH1, TH2, TH3, TH4] },
  HueFit: { thumbnail: HueFit, images: [HF1, HF2, HF3, HF4, HF5, HF6] },
  PeerToPeerDeliverySystem: {
    thumbnail: PeerToPeerDeliverySystem,
    images: [PB1, PB2],
  },
  SmileCare: { thumbnail: SmileCare, images: [SC1, SC2, SC3, SC4] },
  BankingSystem: { thumbnail: BankingSystem, images: [OF1, OF2, OF3, OF4] },
  AniQuinch: { thumbnail: AniQuinch, images: [AQ1, AQ2, AQ3, AQ4] },
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
