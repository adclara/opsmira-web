import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://opsmira.ai"),
  title: {
    default: "OpsMira | Delivery-First AI Operations For SMBs",
    template: "%s | OpsMira"
  },
  description:
    "OpsMira implements done-for-you AI operations systems for SMBs, including workflow automation, customer follow-up, scheduling coordination, reporting automation, and owner visibility dashboards.",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OpsMira",
    title: "OpsMira | Delivery-First AI Operations For SMBs",
    description:
      "Done-for-you AI operations for SMBs — workflow automation, customer follow-up, scheduling coordination, reporting, and owner dashboards.",
    url: "https://opsmira.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OpsMira — AI Operations For SMBs" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsMira | Delivery-First AI Operations For SMBs",
    description:
      "Done-for-you AI operations for SMBs — cut admin cost, recover missed opportunities, and gain owner visibility.",
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
