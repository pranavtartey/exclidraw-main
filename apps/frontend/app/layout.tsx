import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-sans",
  weight: "variable",
});
import "./globals.css";

export const metadata: Metadata = {
  title: "Draw App",
  description: "This is a collaborative productivity app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-black`}>{children}</body>
    </html>
  );
}
