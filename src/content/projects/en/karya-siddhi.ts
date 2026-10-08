import img0 from "../../../assets/images/projects/karya-siddhi/karya-siddhi-0.webp";
import img1 from "../../../assets/images/projects/karya-siddhi/karya-siddhi-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Karya Siddhi",
  theme: "light",
  tags: ["react-native", "expo", "typescript", "firebase"],
  live: "https://karya-siddhi-sankalpa.web.app",
  description:
    "A cross-platform companion app for devotees of Sri Karya Siddhi Anjaneya Temple, Bengaluru, guiding the 16-day Hanuman Sankalpa — 108 mantras every day and four temple visits of 16 pradakshinas each.<br/><br/>Built with React Native, Expo SDK 57 and TypeScript for Android and iOS: offline-first, with optional Firebase backup and multi-device sync. Prepared for Play Store release.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Karya Siddhi app screens: home, mantra counter, eyes-closed mode, pradakshina counter and journey completion",
        caption: "Daily practice, counters and journey completion",
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture",
        text: "MVVM with a single repository as the source of truth: the database lives in memory so every counter tap responds instantly, and is persisted to on-device SQLite storage. Firebase Auth and Firestore provide optional backup. Business rules — journey days, visit scheduling, reminders, sync merging and widget content — are pure, unit-tested TypeScript functions, so screens never touch storage directly.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Eyes-closed chanting mode: the whole screen becomes the counter, with haptics, keep-awake and a completion chime at 108",
          "Pradakshina counter with an optional mantra pad for devotees who chant while walking",
          "The sloka in 8 Indic scripts — Devanagari, Kannada, Telugu, Tamil, Malayalam, Gujarati, Bengali and IAST — each checked against its Unicode block by tests",
          "Local reminders that cancel themselves once the day's practice is done",
          "Home-screen widgets for iOS and Android showing the day and today's count",
          "Joining mid-journey, a 16-day timeline, a completion summary and shareable milestone cards",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img1,
        alt: "Karya Siddhi app screens: journey timeline, sloka scripts, temple visits and home-screen widget",
        caption: "Journey timeline, sloka scripts, visits and widget",
      },
    },
    {
      type: "list",
      props: {
        title: "Engineering",
        items: [
          "Offline-first sync with pure last-writer-wins merge rules, one active Sankalpa across devices, and backup a few seconds after changes stop — never on every tap",
          "Write-behind persistence that saves a tap after a pause immediately and batches rapid taps",
          "88 Jest unit tests covering journey rules, sync, reminders, insights and widget content",
          "Custom Expo config plugins for Android theming and build fixes; privacy-policy and account-deletion pages on Firebase Hosting",
          "Verified end-to-end on Android: release build, keyboard handling under edge-to-edge, notification permissions and account deletion",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
