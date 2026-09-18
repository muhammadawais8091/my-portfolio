import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "./StairTransition";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Muhammad Awais | Frontend Engineer",
  description:
    "React, NextJs & TypeScript specialist with 7+ years building fast, accessible apps and shared design systems used across 1000+ enterprise sites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        {children}
      </body>
    </html>
  );
}
