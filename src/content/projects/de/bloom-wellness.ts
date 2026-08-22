import img0 from "../../../assets/images/projects/bloom-wellness/bloom-wellness-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Bloom Wellness",
  theme: "dark",
  tags: ["android", "kotlin", "compose", "firebase"],
  source: "https://github.com/sagareddum/ProjectP",
  description:
    "Eine Begleit-App für Schwangerschaft & Achtsamkeit — eine Multi-Module-Android-Anwendung, die Schwangerschafts-Tracking mit einer Meditations-Engine kombiniert.<br/><br/>Gebaut mit Kotlin, Jetpack Compose, Clean Architecture + MVI und einer skalierbaren Modul-Struktur (journey, wellness, audio, design-system, core).",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Bloom Wellness App-Übersicht",
        caption: "App-Übersicht",
      },
    },
    {
      type: "text",
      props: {
        title: "Architektur",
        text: "Hilt für Dependency Injection, Room/DataStore für Offline-First-Speicherung und Media3/ExoPlayer für Hintergrund-Audio — organisiert in die Module journey, wellness, audio, design-system und core.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Echtzeit-Meditations-Visualisierungen mit Canvas",
          "Schwangerschaftswochen-Rechner und Tracking",
          "Symptom-Trend-Analytics",
          "Individuelles Tag/Nacht-Designsystem",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
