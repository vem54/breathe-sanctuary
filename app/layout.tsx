import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import StructuredData from "@/app/components/StructuredData";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://breathephuket.com"),
  alternates: {
    canonical: "/",
  },
  title:
    "Breathe Sanctuary — Thermal Wellness Spa & Cold Plunge in Phuket, Thailand",
  description:
    "Premium thermal wellness sanctuary in Phuket. Finnish sauna, ice baths, cold plunge at 3°C, infrared sauna, red light therapy, IV therapy, blood testing, mineral baths, yoga, and poolside dining. Day pass ฿650. Walk-ins welcome.",
  keywords: [
    "Phuket sauna",
    "Phuket spa",
    "Phuket wellness",
    "cold plunge Phuket",
    "ice bath Phuket",
    "thermal spa Phuket",
    "wellness center Phuket",
    "infrared sauna Phuket",
    "red light therapy Phuket",
    "IV therapy Phuket",
    "day spa Phuket",
    "Breathe Sanctuary",
    "wellness retreat Thailand",
  ],
  openGraph: {
    title:
      "Breathe Sanctuary — Thermal Wellness Spa & Cold Plunge in Phuket",
    description:
      "Premium thermal wellness sanctuary in Phuket. Sauna, ice baths, cold plunge, red light therapy, IV therapy, yoga, and poolside dining. Walk-ins welcome.",
    type: "website",
    locale: "en_US",
    siteName: "Breathe Sanctuary",
    url: "https://breathephuket.com",
    images: [
      {
        url: "/images/pool-breathe-logo.jpg",
        width: 2000,
        height: 1333,
        alt: "Breathe Sanctuary pool in Phuket with palm tree shadows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathe Sanctuary — Thermal Wellness Spa in Phuket",
    description:
      "Sauna, cold plunge, red light therapy, IV therapy, and more. Walk-ins welcome. Day pass ฿650.",
    images: ["/images/pool-breathe-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
