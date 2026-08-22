export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "android"
  | "kotlin"
  | "compose"
  | "spring-boot"
  | "python"
  | "pytorch"
  | "opencv"
  | "mysql"
  | "firebase"
  | "streamlit";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  android: "Android",
  kotlin: "Kotlin",
  compose: "Jetpack Compose",
  "spring-boot": "Spring Boot",
  python: "Python",
  pytorch: "PyTorch",
  opencv: "OpenCV",
  mysql: "MySQL",
  firebase: "Firebase",
  streamlit: "Streamlit",
} as const satisfies Record<TagVariant, string>;
