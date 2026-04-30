import { TASA_Explorer, Stack_Sans_Text } from "next/font/google";

export const tasaExplorer = TASA_Explorer({
  variable: "--font-tasa-explorer",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const stackSansText = Stack_Sans_Text({
  variable: "--font-stack-sans-text",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});
