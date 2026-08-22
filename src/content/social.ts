export const social = [
  { url: "mailto:sagareddum88@gmail.com", name: "mail" },
  { url: "https://github.com/sagareddum", name: "github" },
  { url: "https://www.linkedin.com/in/e-sagar/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
