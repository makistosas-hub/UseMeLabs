import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DevBanner from "@/components/DevBanner";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Teisės draugas – AI legal assistant",
    template: "%s | Teisės draugas"
  },
  description:
    "Per kelias minutes paruošk pretenziją, sutartį ar aiškų laišką su AI pagalba. Rašai čia – žinutės keliauja į Slack.",
  openGraph: {
    title: "Teisės draugas – AI legal assistant",
    description:
      "Per kelias minutes paruošk pretenziją, sutartį ar aiškų laišką. Rašai čia – žinutės keliauja į Slack.",
    url: "/",
    siteName: "Teisės draugas",
    locale: "lt_LT",
    type: "website",
    images: [{ url: "/og.svg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Teisės draugas – AI legal assistant",
    description:
      "Per kelias minutes paruošk pretenziją, sutartį ar aiškų laišką. Rašai čia – žinutės keliauja į Slack.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body className={`${inter.className} text-slate-100 antialiased`}>
        <DevBanner />
        {children}
      </body>
    </html>
  );
}