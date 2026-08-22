import thumbnailAutoPay from "../../../assets/thumbnails/auto-pay.webp";
import thumbnailBloomWellness from "../../../assets/thumbnails/bloom-wellness.webp";
import thumbnailHelmetDetection from "../../../assets/thumbnails/helmet-detection.webp";
import thumbnailBillingApp from "../../../assets/thumbnails/billing-app.webp";
import thumbnailPortfolioBuilder from "../../../assets/thumbnails/portfolio-builder.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Auto-Pay Mandate System",
    slug: "auto-pay",
    thumbnail: thumbnailAutoPay,
    description: "Payments platform in production",
  },
  {
    title: "Bloom Wellness",
    slug: "bloom-wellness",
    thumbnail: thumbnailBloomWellness,
    description: "Android wellness companion app",
  },
  {
    title: "Helmet Detection & E-Challan",
    slug: "helmet-detection",
    thumbnail: thumbnailHelmetDetection,
    description: "Real-time AI violation detection",
  },
  {
    title: "Billing Application",
    slug: "billing-app",
    thumbnail: thumbnailBillingApp,
    description: "Retail billing & inventory",
  },
  {
    title: "MyPortfolioBuilder",
    slug: "portfolio-builder",
    thumbnail: thumbnailPortfolioBuilder,
    description: "Portfolio site generator",
  },
] as const satisfies ProjectPreview[];
