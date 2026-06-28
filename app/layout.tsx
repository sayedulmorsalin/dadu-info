import type { Metadata } from "next";
import "./globals.css";
import iconJpg from "../assets/icon.jpg";

export const metadata: Metadata = {
  title: {
    template: "%s | Dadu Khelaghor",
    default: "Dadu Khelaghor | দাদু খেলাঘর — Best Football Boots & Sports Equipment Bangladesh",
  },
  description:
    "Dadu Khelaghor (দাদু খেলাঘর) - Bangladesh's premier sports equipment shop. Buy premium football boots (Adidas F50), goalkeeper gloves, and full combo kits. Genuine quality at great prices. Order via WhatsApp: +880 1787-208108 | Free delivery across Bangladesh.",
  keywords: "football boots Bangladesh, goalkeeper gloves, sports equipment, Adidas F50, football cleats, sports gear Bangladesh, Rajshahi",
  authors: [{ name: "Dadu Khelaghor" }],
  creator: "Dadu Khelaghor",
  publisher: "Dadu Khelaghor",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  metadataBase: new URL("https://dadufans.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dadufans.com",
    siteName: "Dadu Khelaghor",
    title: "Dadu Khelaghor | দাদু খেলাঘর — Football Boots & Sports Equipment Bangladesh",
    description:
      "Buy premium football boots, goalkeeper gloves, and sports combo kits from Dadu Khelaghor. Genuine quality, fast delivery across Bangladesh.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dadu Khelaghor - Sports Equipment Shop Bangladesh",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dadu Khelaghor | দাদু খেলাঘর",
    description: "Best football boots & sports equipment in Bangladesh",
    images: ["/images/og-image.png"],
  },
  applicationName: "Dadu Khelaghor",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dadu Khelaghor",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://dadufans.com",
    languages: {
      "en-US": "https://dadufans.com/en",
      "bn-BD": "https://dadufans.com/bn",
    },
  },
  referrer: "strict-origin-when-cross-origin",
  category: "business",
  classification: "Sports Equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Dadu Khelaghor",
    alternateName: "দাদু খেলাঘর",
    url: "https://dadufans.com",
    logo: "https://dadufans.com/images/logo.png",
    description:
      "Bangladesh's premier sports equipment shop specializing in football boots, goalkeeper gloves, and sports combo kits.",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100094599728841",
      "https://www.youtube.com/@dadukhelaghor",
      "https://wa.me/8801787208108",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shaheb Bazar",
      addressLocality: "Rajshahi",
      addressRegion: "Rajshahi",
      postalCode: "6000",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.3636,
      longitude: 88.6241
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday"
        ],
        opens: "09:00",
        closes: "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "14:00",
        closes: "21:00"
      }
    ],
    areaServed: "BD",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+880-1787-208108",
    },
    priceRange: "BDT 2000-15000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ff8c00" />
        <meta name="msapplication-TileColor" content="#ff8c00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preconnect to fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Apple Web App */}
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" href="/images/favicon.ico" />
        {/* Project icon.jpg as primary favicon */}
        <link rel="icon" href={iconJpg.src} />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
