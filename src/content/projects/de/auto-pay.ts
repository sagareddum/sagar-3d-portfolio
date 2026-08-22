import img0 from "../../../assets/images/projects/auto-pay/auto-pay-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Auto-Pay-Mandates-System",
  theme: "light",
  tags: ["kotlin", "spring-boot", "android", "node"],
  description:
    "Ein Auto-Pay-/Mandates-System für Zahlungen, das bei Onsurity komplett eigenständig entwickelt wurde — Backend (Mandats-Erstellung, Status-Tracking, Abbuchung, Widerruf, Webhook-Handling) und Android (Mandats-UI, Consent-Flow).<br/><br/>Jetzt in Produktion und treibt wiederkehrende Zahlungsflüsse mit geplanten Retries, Reconciliation-Cronjobs und VAN-Zahlungsabstimmung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Auto-Pay-Mandates-System Übersicht",
        caption: "Systemübersicht",
      },
    },
    {
      type: "text",
      props: {
        title: "Highlights",
        text: "30+ sichere REST-APIs für Checkout, Payment Links, Mandate, Rückerstattungen und Abos mit JWT-Auth und Input-Validierung. Leitung der Migration zentraler Payment-Services von Node.js zu Spring Boot mit ~30% schnelleren Deployments.",
      },
    },
    {
      type: "list",
      props: {
        title: "Verantwortung",
        items: [
          "End-to-End-Architektur: DB-Design, API-Entwicklung, Android-UI, Testing, Deployment, Monitoring",
          "Webhook-Handling und Idempotenz bei 3+ Payment/Partner-SDK-Integrationen (inkl. Juspay)",
          "Cronjobs für Retries, Reconciliation und Cleanup; VAN-Zahlungsabstimmung",
          "Automatisierte Unit- & Integrationstests für kritische Zahlungswege",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
