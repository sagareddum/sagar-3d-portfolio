import img0 from "../../../assets/images/projects/bloom-wellness/bloom-wellness-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Bloom Wellness",
  theme: "dark",
  tags: ["android", "kotlin", "compose", "firebase"],
  source: "https://github.com/sagareddum/ProjectP",
  description:
    "A maternal & mindfulness companion app — a multi-module Android application combining pregnancy tracking with a meditation engine.<br/><br/>Built with Kotlin, Jetpack Compose, Clean Architecture + MVI, and a scalable module structure (journey, wellness, audio, design-system, core).",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Bloom Wellness App Overview",
        caption: "App Overview",
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture",
        text: "Hilt for dependency injection, Room/DataStore for offline-first storage, and Media3/ExoPlayer for background audio playback — organized into journey, wellness, audio, design-system and core modules.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Real-time Canvas-based meditation visualizers",
          "Gestational-week calculator and pregnancy tracking",
          "Symptom trend analytics",
          "Custom day/night design system",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
