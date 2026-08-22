import img0 from "../../../assets/images/projects/billing-app/billing-app-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Billing-Anwendung",
  theme: "light",
  tags: ["react", "spring-boot", "mysql"],
  source: "https://github.com/sagareddum/Billing-Application",
  description:
    "Eine vollständige Billing-Anwendung mit Mitarbeiter-Login, Abrechnung, Lagerverwaltung, Barcode-Generierung und Analytics-Dashboards.<br/><br/>Gebaut mit React-JS-Frontend, Spring-Boot-Backend und MySQL — vom Inventar über den Checkout bis zum Reporting.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Billing-Anwendung Dashboard",
        caption: "Billing-Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "Rollenbasierte Authentifizierung trennt Kassen- und Admin-Workflows. Lagereingänge aktualisieren den Bestand in Echtzeit, jede Transaktion wird in MySQL für Reports gespeichert.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Mitarbeiter-Login mit rollenbasiertem Zugriff",
          "Abrechnungsflow mit Barcode-Generierung",
          "Echtzeit-Lagerverwaltung und Bestands-Tracking",
          "Analytics-Dashboards für Umsatzreports",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
