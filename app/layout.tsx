import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dadu Khelaghor | দাদু খেলাঘর — Sports Equipment Bangladesh",
  description:
    "Dadu Khelaghor (দাদু খেলাঘর) is a Bangladeshi sports equipment channel selling football boots, goalkeeper gloves, and full combo kits. Order via WhatsApp: 01787208108.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
