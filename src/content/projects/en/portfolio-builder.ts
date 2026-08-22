import img0 from "../../../assets/images/projects/portfolio-builder/portfolio-builder-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MyPortfolioBuilder",
  theme: "dark",
  tags: ["python", "streamlit"],
  source: "https://github.com/sagareddum/Portfolio_maker",
  description:
    "A Python/Streamlit web app that converts user data into personalized portfolio websites.<br/><br/>Users fill in their details through a guided interface; the app generates a complete portfolio site from JSON templates, enhanced with Lottie animations.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "MyPortfolioBuilder Interface",
        caption: "Builder Interface",
      },
    },
    {
      type: "text",
      props: {
        title: "How It Works",
        text: "Structured user input is serialized to JSON, which drives template-based generation of a personalized multi-section portfolio website — no coding required from the user.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "Guided data-entry flow built with Streamlit",
          "JSON-driven template generation",
          "Lottie animations for polished output",
          "Version-controlled with Git",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
