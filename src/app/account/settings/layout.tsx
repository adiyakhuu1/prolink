import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google";
import "../../globals.css";
import { Button } from "@mui/material";
import Link from "next/link";
import NavigationSettings from "./_component/navigation_settings";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProLink - Тохиргоо",
  description: "Generated by create next app",
};
const inter = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-2">
        <NavigationSettings />
        {/* <Button>Профайл тохиргоо</Button>
        <Button>Профайл тохиргоо</Button> */}
      </div>
      <div className={`${inter.className} min-h-screen  bg-secondary`}>
        {children}
      </div>
    </div>
  );
}
