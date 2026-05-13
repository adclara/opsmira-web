import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://adclara.github.io/opsmira-web/"),
  title: {
    default: "OpsMira | Delivery-First AI Operations For SMBs",
    template: "%s | OpsMira"
  },
  description:
    "OpsMira implements done-for-you AI operations systems for SMBs, including workflow automation, customer follow-up, scheduling coordination, reporting automation, and owner visibility dashboards.",
  icons: {
    icon: "/icon.svg"
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
