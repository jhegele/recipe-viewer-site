import { Inter as FontInter } from "next/font/google";

export const Inter = FontInter({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});
