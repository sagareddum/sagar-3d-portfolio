import img0 from "../../../assets/images/projects/helmet-detection/helmet-detection-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Helmet Detection & E-Challan",
  theme: "dark",
  tags: ["python", "pytorch", "opencv"],
  source: "https://github.com/sagareddum/yolo_helmet_detection",
  description:
    "Ein Echtzeitsystem zur Erkennung von Helm-Verstößen mit automatisierter E-Challan-Generierung, entwickelt am IIIT Pune.<br/><br/>Nutzt YOLOv8-Objekterkennung (PyTorch) kombiniert mit OpenCV für Live-Videoverarbeitung und wendet CNNs sowie Transfer Learning an, um Fahrer ohne Helm zu erkennen und automatisch elektronische Strafzettel auszustellen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Helmet-Detection-Pipeline",
        caption: "Detection-Pipeline",
      },
    },
    {
      type: "text",
      props: {
        title: "Ansatz",
        text: "YOLOv8 auf einem eigenen Helm-Datensatz mittels Transfer Learning fine-tuned; OpenCV übernimmt Echtzeit-Frame-Erfassung, ROI-Extraktion und Kennzeichenerkennung für die automatisierte E-Challan-Generierung.",
      },
    },
    {
      type: "list",
      props: {
        title: "Kerndetails",
        items: [
          "Echtzeit-Inferenz auf Live-Videostreams",
          "CNN-basierte Klassifikation mit Transfer Learning",
          "Automatisierter E-Challan-Workflow vom Verstoß bis zum Bescheid",
          "Gebaut mit PyTorch, YOLOv8 und OpenCV",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
