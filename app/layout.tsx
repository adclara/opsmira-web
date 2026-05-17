import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://opsmira.ai"),
  title: {
    default: "OpsMira | AI Agents That Cut Costs & Maximize Output",
    template: "%s | OpsMira"
  },
  description:
    "OpsMira deploys AI agents across your operations — supply chain, production, sales, and admin — to reduce costs, increase throughput, and grow profit on autopilot.",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OpsMira",
    title: "OpsMira | AI Agents That Cut Costs & Maximize Output",
    description:
      "Deploy intelligent AI agents to optimize your supply chain, automate operations, and maximize profit.",
    url: "https://opsmira.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OpsMira — AI Agents for Business" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsMira | AI Agents That Cut Costs & Maximize Output",
    description:
      "AI agents for supply chain, production, sales, and operations — reduce costs and grow profit on autopilot.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
