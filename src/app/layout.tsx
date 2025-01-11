import type { Metadata } from "next";
import { Rubik, Questrial } from "next/font/google";
import "./globals.css";
import ResponNav from "@/component/Home/NavBar/ResponNav";

const fontRubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fontQuestrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Fresh Harvest",
  description: "Fresh Harvest - Your Local Farmers Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRubik.className} ${fontQuestrial.className} antialiased`}
      >
        <ResponNav />
        {children}
      </body>
    </html>
  );
}
