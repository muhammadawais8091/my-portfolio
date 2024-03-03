import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./(site)/components/global/Navbar";
import Footer from "./(site)/components/global/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Awais",
  description: "Frontend Developer | React JS",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        <div className="min-h-[calc(100vh - 200px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}