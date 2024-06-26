import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/Main";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsena Argretya",
  description: "Generated by create next app",
  icons: {
    icon: "/assets/favicon.ico",
    favicon16: "/assets/favicon-16x16.png",
    favicon32: "/assets//favicon-32x32.png",
    appleTouchIcon: "/assets/apple-touch-icon.png",
  },
  mainfest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Main />
        <Analytics />
      </body>
    </html>
  );
}
