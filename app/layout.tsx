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
  title: "Breathe Sanctuary | Thermal Wellness, Phuket",
  description:
    "A premium thermal spa and wellness sanctuary in Phuket, Thailand. Sauna, ice baths, red light therapy, IV therapy, blood testing, yoga, and more.",
  openGraph: {
    title: "Breathe Sanctuary | Thermal Wellness, Phuket",
    description:
      "A premium thermal spa and wellness sanctuary in Phuket, Thailand. Thermal circuits, IV therapy, blood testing, and recovery.",
    type: "website",
    locale: "en_US",
    siteName: "Breathe Sanctuary",
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
