import img0 from "../../../assets/images/projects/helmet-detection/helmet-detection-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Helmet Detection & E-Challan",
  theme: "dark",
  tags: ["python", "pytorch", "opencv"],
  source: "https://github.com/sagareddum/yolo_helmet_detection",
  description:
    "A real-time helmet-violation detection system with automated e-challan generation, built at IIIT Pune.<br/><br/>Uses YOLOv8 object detection (PyTorch) combined with OpenCV for live video processing, applying CNNs and Transfer Learning to identify riders without helmets and automatically issue electronic challans.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: img0,
        alt: "Helmet Detection Pipeline",
        caption: "Detection Pipeline",
      },
    },
    {
      type: "text",
      props: {
        title: "Approach",
        text: "Fine-tuned YOLOv8 on a custom helmet-detection dataset using Transfer Learning, with OpenCV handling real-time frame capture, region-of-interest extraction and license-plate reading for automated e-challan generation.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Details",
        items: [
          "Real-time inference on live video streams",
          "CNN-based classification with Transfer Learning",
          "Automated e-challan workflow from violation to notice",
          "Built with PyTorch, YOLOv8 and OpenCV",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
