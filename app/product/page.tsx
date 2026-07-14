import type { Metadata } from "next";
import Link from "next/link";
import ProductStoreRedirect from "./ProductStoreRedirect";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu";

export const metadata: Metadata = {
  title: "Open Product in Dadu App",
  description:
    "Open Dadu product links in the Android app, or install Dadu from Google Play.",
  alternates: {
    canonical: "https://dadubd.com/product",
  },
};

export default function ProductFallbackPage() {
  return (
    <main
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #ffffff 0%, #fff6ee 100%)",
        color: "var(--ink)",
        display: "flex",
        minHeight: "100svh",
        padding: "120px 20px 48px",
      }}
    >
      <ProductStoreRedirect />

      <section style={{ margin: "0 auto", maxWidth: 680, width: "100%" }}>
        <p className="eyebrow">Dadu Khelaghor</p>
        <h1 style={{ fontSize: "clamp(2rem, 7vw, 3.8rem)" }}>
          Open this product in the Dadu app
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.7 }}>
          If the app is installed, Android App Links can open it directly. On
          mobile browsers, this page will send visitors to Google Play after a
          short moment.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href={playStoreUrl}>
            Get the app
          </a>
          <Link className="secondaryButton" href="/">
            Visit website
          </Link>
        </div>
      </section>
    </main>
  );
}

