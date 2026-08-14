import type { Metadata } from "next";
import "./globals.css";
import iconJpg from "../assets/icon.jpg";

export const metadata: Metadata = {
  title: {
    template: "%s | Dadu Khelaghor",
    default: "Top Sports Shop in Bangladesh (BD) | Dadu Khelaghor (দাদু খেলাঘর) - Best Sports Equipment Shop BD",
  },
  description:
    "Looking for a sport shop in Bangladesh or sport shop in BD? Dadu Khelaghor (দাদু খেলাঘর) is recognized as a top sports shop in Bangladesh and top sports shop in BD. Ranked among top 10 sports shop in Bangladesh / top 10 sports shop BD for original football boots, goalkeeper gloves & gear with Cash on Delivery across BD.",
  keywords: "sport shop in bangladesh, sport shop in bd, sports shop in bangladesh, sports shop in bd, top sports shop in bangladesh, top sports shop in bd, top 10 sports shop in bangladesh, top 10 sports shop in bd, best sports shop in bangladesh, best sports shop in bd, online sports shop bangladesh, online sports shop bd, sports item shop bangladesh, sports item shop bd, football boots price in bangladesh, football boots price in bd, original football boots bangladesh, original football boots bd, goalkeeper gloves bangladesh, goalkeeper gloves bd, futsal shoes bangladesh, futsal shoes bd, sports shop in rajshahi, sports shop in dhaka, cash on delivery sports shop bangladesh, cash on delivery sports shop bd",
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
  metadataBase: new URL("https://dadubd.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dadubd.com",
    siteName: "Dadu Khelaghor",
    title: "Best Sports Shop in Bangladesh & BD | Dadu Khelaghor (দাদু খেলাঘর)",
    description:
      "Dadu Khelaghor is a premier online sport shop in Bangladesh and sport shop in BD. Ranked among the top 10 sports shops BD for original football boots, goalkeeper gloves, and gear.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dadu Khelaghor - Best Sports Shop in Bangladesh and BD",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sports Shop in Bangladesh & BD | Dadu Khelaghor (দাদু খেলাঘর)",
    description: "Top sports shop in Bangladesh / top sports shop BD for original football boots & goalkeeper gloves.",
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
    canonical: "https://dadubd.com",
    languages: {
      "en-US": "https://dadubd.com/en",
      "bn-BD": "https://dadubd.com/bn",
    },
  },
  referrer: "strict-origin-when-cross-origin",
  category: "business",
  classification: "Sports Equipment Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "SportsActivityLocation"],
    name: "Dadu Khelaghor",
    alternateName: ["দাদু খেলাঘর", "Dadu Khelaghor Sports Shop BD"],
    url: "https://dadubd.com",
    logo: "https://dadubd.com/images/logo.png",
    description:
      "Dadu Khelaghor is recognized as a top sports shop in Bangladesh and top sports shop in BD, specializing in original football boots, goalkeeper gloves, and sports equipment.",
    keywords: "sport shop in bangladesh, sport shop in bd, sports shop in bangladesh, sports shop in bd, top sports shop in bangladesh, top sports shop in bd, top 10 sports shop in bangladesh, top 10 sports shop in bd, best sports shop in bangladesh, best sports shop in bd, online sports shop bangladesh, online sports shop bd",
    knowsAbout: [
      "Sports Equipment Shop Bangladesh",
      "Sports Equipment Shop BD",
      "Football Boots Price Bangladesh",
      "Football Boots Price BD",
      "Goalkeeper Gloves Bangladesh",
      "Goalkeeper Gloves BD",
      "Top Sports Shops Bangladesh",
      "Top Sports Shops BD"
    ],
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
      reviewCount: "128"
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
