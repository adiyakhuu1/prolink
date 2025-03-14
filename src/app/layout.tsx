import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./account/_components/navigation";
import Footer from "./account/_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProLink",
  description:
    "Mанай веб сайт нь Монголын чадварлаг залууст зориулан гаргасан, өөрт тохирох ажлыг олох зорилготой Та мөрөөдлийн карьер болон ажлын байраа манай веб сайтаас олоорой  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" mb-10">
          <Navigation />
        </div>
        <div className=" min-h-screen">{children}</div>
        <div className=" mt-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
