import img0 from "../../../assets/images/projects/portfolio-builder/portfolio-builder-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MyPortfolioBuilder",
  theme: "dark",
  tags: ["python", "streamlit"],
  source: "https://github.com/sagareddum/Portfolio_maker",
  description:
    "Eine Python/Streamlit-Web-App, die Nutzerdaten in personalisierte Portfolio-Websites umwandelt.<br/><br/>Nutzer geben ihre Daten über eine geführte Oberfläche ein; die App generiert aus JSON-Templates eine komplette Portfolio-Website, angereichert mit Lottie-Animationen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "MyPortfolioBuilder Oberfläche",
        caption: "Builder-Oberfläche",
      },
    },
    {
      type: "text",
      props: {
        title: "Funktionsweise",
        text: "Strukturierte Nutzereingaben werden als JSON serialisiert, die die templatebasierte Generierung einer personalisierten, mehrteiligen Portfolio-Website antreibt — ganz ohne Programmieren.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "Geführter Eingabeflow mit Streamlit",
          "JSON-basierte Template-Generierung",
          "Lottie-Animationen für polierte Ergebnisse",
          "Versionsverwaltung mit Git",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
