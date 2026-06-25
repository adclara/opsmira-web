import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://opsmira.ai"),
  title: {
    default: "OpsMira | Operations & Supply-Chain Consulting That Pays for Itself",
    template: "%s | OpsMira"
  },
  description:
    "OpsMira diagnoses where your business is losing money and delivers the fix — better processes, standards, custom apps, dashboards, and AI agents. The diagnosis is free; you pay for the improvement.",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OpsMira",
    title: "OpsMira | Operations & Supply-Chain Consulting",
    description:
      "Free operations diagnosis. You pay for the improvement — processes, standards, custom apps, dashboards, or AI agents, scoped to the value they create.",
    url: "https://opsmira.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OpsMira — Operations & Supply-Chain Consulting" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsMira | Operations & Supply-Chain Consulting",
    description:
      "Free operations diagnosis. You pay for the improvement — processes, apps, dashboards, and AI agents, scoped to the value they create.",
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
