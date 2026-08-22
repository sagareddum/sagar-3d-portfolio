import img0 from "../../../assets/images/projects/auto-pay/auto-pay-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Auto-Pay Mandate System",
  theme: "light",
  tags: ["kotlin", "spring-boot", "android", "node"],
  description:
    "A payments auto-pay / mandate system solo-designed and built end-to-end at Onsurity — backend (mandate creation, status tracking, debit execution, revocation, webhook handling) and Android (mandate UI, consent flow).<br/><br/>Now live in production, driving recurring-revenue payment flows with scheduled retries, reconciliation cron jobs, and VAN payment reconciliation.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Auto-Pay Mandate System Overview",
        caption: "System Overview",
      },
    },
    {
      type: "text",
      props: {
        title: "Highlights",
        text: "Shipped 30+ secure REST APIs for checkout, payment links, mandates, refunds and subscriptions with JWT auth and input validation. Led the migration of core payment services from Node.js to Spring Boot, cutting deployment time by ~30%.",
      },
    },
    {
      type: "list",
      props: {
        title: "Responsibilities",
        items: [
          "End-to-end architecture: DB design, API development, Android UI, testing, deployment, monitoring",
          "Webhook handling and idempotency across 3+ payment/partner SDK integrations (incl. Juspay)",
          "Cron jobs for retries, reconciliation and cleanup; VAN payment reconciliation",
          "Automated unit & integration tests backing critical payment paths",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
