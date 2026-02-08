import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sayada.ai — Intelligence at the Speed of Business",
  description:
    "AI-powered business automation platform. 20 pre-built workflows that eliminate manual work. From solo consultants to Fortune 500.",
  keywords: [
    "AI automation",
    "business workflows",
    "AI agents",
    "process automation",
    "business intelligence",
  ],
  openGraph: {
    title: "Sayada.ai — Intelligence at the Speed of Business",
    description:
      "20 AI-powered automations that eliminate manual work. Start your 14-day trial.",
    url: "https://sayada.ai",
    siteName: "Sayada.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-[#0F0F1A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
