import thumbnailAutoPay from "../../../assets/thumbnails/auto-pay.webp";
import thumbnailKaryaSiddhi from "../../../assets/thumbnails/karya-siddhi.webp";
import thumbnailBloomWellness from "../../../assets/thumbnails/bloom-wellness.webp";
import thumbnailHelmetDetection from "../../../assets/thumbnails/helmet-detection.webp";
import thumbnailBillingApp from "../../../assets/thumbnails/billing-app.webp";
import thumbnailPortfolioBuilder from "../../../assets/thumbnails/portfolio-builder.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Auto-Pay-Mandates-System",
    slug: "auto-pay",
    thumbnail: thumbnailAutoPay,
    description: "Zahlungsplattform in Produktion",
  },
  {
    title: "Karya Siddhi",
    slug: "karya-siddhi",
    thumbnail: thumbnailKaryaSiddhi,
    description: "Tempel-Begleit-App mit React Native",
  },
  {
    title: "Bloom Wellness",
    slug: "bloom-wellness",
    thumbnail: thumbnailBloomWellness,
    description: "Android Wellness-App",
  },
  {
    title: "Helmet Detection & E-Challan",
    slug: "helmet-detection",
    thumbnail: thumbnailHelmetDetection,
    description: "KI-Verstoß-Erkennung in Echtzeit",
  },
  {
    title: "Billing-Anwendung",
    slug: "billing-app",
    thumbnail: thumbnailBillingApp,
    description: "Retail-Abrechnung & Inventar",
  },
  {
    title: "MyPortfolioBuilder",
    slug: "portfolio-builder",
    thumbnail: thumbnailPortfolioBuilder,
    description: "Portfolio-Website-Generator",
  },
] as const satisfies ProjectPreview[];
