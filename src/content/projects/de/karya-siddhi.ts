import img0 from "../../../assets/images/projects/karya-siddhi/karya-siddhi-0.webp";
import img1 from "../../../assets/images/projects/karya-siddhi/karya-siddhi-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Karya Siddhi",
  theme: "light",
  tags: ["react-native", "expo", "typescript", "firebase"],
  live: "https://karya-siddhi-sankalpa.web.app",
  description:
    "Eine plattformübergreifende Begleit-App für Gläubige des Sri Karya Siddhi Anjaneya Tempels in Bengaluru, die durch das 16-tägige Hanuman-Sankalpa führt — täglich 108 Mantras und vier Tempelbesuche mit je 16 Pradakshinas.<br/><br/>Gebaut mit React Native, Expo SDK 57 und TypeScript für Android und iOS: Offline-First, mit optionalem Firebase-Backup und geräteübergreifender Synchronisierung. Bereit für die Veröffentlichung im Play Store.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Karya-Siddhi-App: Startseite, Mantra-Zähler, Augen-geschlossen-Modus, Pradakshina-Zähler und Abschluss",
        caption: "Tägliche Praxis, Zähler und Abschluss der Reise",
      },
    },
    {
      type: "text",
      props: {
        title: "Architektur",
        text: "MVVM mit einem einzigen Repository als Source of Truth: Die Datenbank liegt im Speicher, damit jeder Zähler-Tap sofort reagiert, und wird in SQLite auf dem Gerät gesichert. Firebase Auth und Firestore sorgen optional für das Backup. Die Geschäftslogik — Reisetage, Besuchsplanung, Erinnerungen, Sync-Merge und Widget-Inhalte — besteht aus reinen, getesteten TypeScript-Funktionen, sodass die Oberfläche nie direkt auf den Speicher zugreift.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Augen-geschlossen-Modus: Der ganze Bildschirm wird zum Zähler, mit Haptik, aktivem Display und Abschluss-Klang bei 108",
          "Pradakshina-Zähler mit optionalem Mantra-Feld für Gläubige, die beim Gehen chanten",
          "Das Sloka in 8 indischen Schriften — Devanagari, Kannada, Telugu, Tamil, Malayalam, Gujarati, Bengali und IAST — jede per Test gegen ihren Unicode-Block geprüft",
          "Lokale Erinnerungen, die sich selbst abbrechen, sobald die Tagespraxis erledigt ist",
          "Homescreen-Widgets für iOS und Android mit Tag und heutigem Stand",
          "Einstieg mitten in der Reise, 16-Tage-Zeitleiste, Abschluss-Übersicht und teilbare Meilenstein-Karten",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img1,
        alt: "Karya-Siddhi-App: Zeitleiste, Sloka-Schriften, Tempelbesuche und Homescreen-Widget",
        caption: "Zeitleiste, Sloka-Schriften, Besuche und Widget",
      },
    },
    {
      type: "list",
      props: {
        title: "Technik",
        items: [
          "Offline-First-Sync mit reinen Last-Writer-Wins-Regeln, genau einem aktiven Sankalpa über alle Geräte und Backup wenige Sekunden nach der letzten Änderung — nie bei jedem Tap",
          "Write-Behind-Speicherung: Ein Tap nach einer Pause wird sofort gesichert, schnelle Taps werden gebündelt",
          "88 Jest-Unit-Tests für Reiseregeln, Sync, Erinnerungen, Insights und Widget-Inhalte",
          "Eigene Expo-Config-Plugins für Android-Theming und Build-Fixes; Datenschutz- und Kontolöschungsseiten auf Firebase Hosting",
          "End-to-End auf Android verifiziert: Release-Build, Tastatur-Handling im Edge-to-Edge-Modus, Benachrichtigungsrechte und Kontolöschung",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
