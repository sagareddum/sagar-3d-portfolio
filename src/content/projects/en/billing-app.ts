import img0 from "../../../assets/images/projects/billing-app/billing-app-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Billing Application",
  theme: "light",
  tags: ["react", "spring-boot", "mysql"],
  source: "https://github.com/sagareddum/Billing-Application",
  description:
    "A full billing application with staff login, billing, stock entry, barcode generation and analytics dashboards.<br/><br/>Built with a React JS frontend, Spring Boot backend and MySQL persistence — covering the complete retail workflow from inventory to checkout and reporting.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Billing Application Dashboard",
        caption: "Billing Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Role-based staff authentication separates cashier and admin workflows. Stock entries update inventory in real time as bills are generated, and every transaction is stored in MySQL for reporting.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Staff login with role-based access",
          "Billing flow with barcode generation",
          "Real-time stock entry and inventory tracking",
          "Analytics dashboards for sales reporting",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
