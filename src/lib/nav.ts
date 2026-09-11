import {
  Camera,
  Wifi,
  BellRing,
  DoorOpen,
  PackageCheck,
  Home,
  Building2,
} from "lucide-react";

export const productLinks = [
  {
    href: "/cctv-camera-kits",
    icon: PackageCheck,
    title: "CCTV Camera Kits",
    description: "Complete plug-and-play kits, ready to install.",
  },
  {
    href: "/cctv-cameras",
    icon: Camera,
    title: "CCTV Cameras",
    description: "Bullet, dome, turret and PTZ cameras.",
  },
  {
    href: "/wifi-cctv-cameras",
    icon: Wifi,
    title: "WiFi CCTV Cameras",
    description: "Wireless cameras for flexible installs.",
  },
] as const;

// Standalone top-level nav tabs (promoted out of the Products mega-menu)
export const standaloneLinks = [
  { href: "/alarm-systems", icon: BellRing, title: "Alarm Systems" },
  { href: "/video-door-entry", icon: DoorOpen, title: "Video Door Entry" },
] as const;

// Full product catalogue, used where a flat list of everything is needed (footer, mobile menu)
export const allProductLinks = [
  ...productLinks,
  { href: "/alarm-systems", icon: BellRing, title: "Alarm Systems", description: "Intruder alarms with 24/7 monitoring." },
  {
    href: "/video-door-entry",
    icon: DoorOpen,
    title: "Video Door Entry",
    description: "See and speak to visitors before you answer.",
  },
] as const;

export const solutionLinks = [
  {
    href: "/cctv-cameras",
    icon: Home,
    title: "Home CCTV",
    description: "Monitor your family round the clock with a tailored, budget-friendly system.",
  },
  {
    href: "/cctv-cameras",
    icon: Building2,
    title: "Commercial CCTV",
    description: "Keep tabs on your business and protect staff with professional-grade cameras.",
  },
] as const;

export const companyLinks = [
  { href: "/about", title: "About Us" },
  { href: "/projects", title: "Projects" },
  { href: "/support", title: "Customer Support" },
] as const;

export const brandPartners = [
  { name: "Hikvision", logo: "/logos/hikvision.svg" },
  { name: "Dahua Technology", logo: "/logos/dahua.svg" },
  { name: "EZVIZ", logo: "/logos/ezviz.png" },
  { name: "Hanwha Vision", logo: "/logos/hanwha-vision.svg" },
  { name: "Seagate", logo: "/logos/seagate.svg" },
  { name: "Ruijie Networks", logo: "/logos/ruijie.svg" },
] as const;
