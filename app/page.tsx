import {
  Download,
  Facebook,
  Footprints,
  Instagram,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Star,
  Trophy,
  Truck,
  UserCheck,
  Youtube,
  Zap,
  BookOpen,
  ShoppingCart,
  CreditCard,
  RefreshCcw,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Clock,
  HelpCircle,
  Award,
} from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import BootBackground from "./BootBackground";
import icon from "../assets/icon.jpg";

const shop = {
  name: "Dadu Khelaghor",
  banglaName: "দাদু খেলাঘর",
  location: "Rajshahi, Bangladesh",
  businessType: "Sports Equipment",
  audience: "Football players, athletes & sports enthusiasts",
  tagline:
    "Recognized as a top sports shop in Bangladesh, Dadu Khelaghor offers high-quality original football boots, goalkeeper gloves, and sports gear nationwide.",
  youtubeUrl: "https://www.youtube.com/@dadukhelaghor",
  facebookUrl: "https://www.facebook.com/profile.php?id=100094599728841",
  instagramUrl: "https://www.instagram.com/dadukhelaghor/",
  tiktokUrl: "https://www.tiktok.com/@dadukhelaghor1",
  appUrl: "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu",
  contactName: "Russell",
  lastChecked: "August 2026",
};

const categories = [
  {
    title: "Football Boots",
    description:
      "Adidas F50 steel spikes, Nike Mercurial cleats, Predator series, and premium boots for all playing surfaces.",
    icon: Footprints,
  },
  {
    title: "Goalkeeper Gloves",
    description:
      "Professional and training-level goalkeeper gloves with high-grade latex grip, finger spine protection, and wrist support.",
    icon: ShieldCheck,
  },
  {
    title: "Full Combo Kits",
    description:
      "Complete value bundles combining premium boots, gloves, shin guards, and accessories.",
    icon: ShoppingBag,
  },
  {
    title: "Sports Accessories",
    description:
      "Match footballs, futsal shoes, ergonomic shin guards, grip socks, and training equipment.",
    icon: Zap,
  },
];

const highlights = [
  { label: "Business Type", value: shop.businessType, icon: Trophy },
  { label: "Search Name", value: shop.banglaName, icon: Star },
  { label: "Location", value: shop.location, icon: MapPin },
  { label: "Delivery", value: "64 Districts BD", icon: Truck },
];

const facts = [
  { label: "Brand Name", value: shop.name },
  { label: "Bangla Name", value: shop.banglaName },
  { label: "Owner", value: "Ahsanul Haque Siam" },
  { label: "Category", value: "Sports equipment / football gear" },
  { label: "Location", value: shop.location },
  { label: "Facebook Page", value: "Dadu Khelaghor" },
  { label: "Audience", value: shop.audience },
  { label: "Payment Options", value: "Cash on Delivery (COD), bKash, Nagad, Rocket" },
];

const trustFeatures = [
  {
    title: "100% Authentic Gear",
    description: "Original football boots, goalkeeper gloves & original sports gear guaranteed.",
    icon: Award,
  },
  {
    title: "Nationwide Express Delivery",
    description: "Fast courier delivery across all 64 districts in Bangladesh with real-time tracking.",
    icon: Truck,
  },
  {
    title: "WhatsApp Order Assistance",
    description: "Dedicated active moderators to confirm sizing, stock availability & delivery address.",
    icon: MessageCircle,
  },
  {
    title: "Cash on Delivery BD",
    description: "Pay conveniently upon receiving and inspecting your items anywhere in BD.",
    icon: ShieldCheck,
  },
];

const moderators = [
  {
    name: "Rasel",
    role: "Senior Moderator",
    contact: "01782124891",
    displayContact: "+880 1782-124891",
    responsibility: "Receives WhatsApp orders, confirms boot sizing, stock, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Rimon",
    role: "Senior Moderator",
    contact: "01787208108",
    displayContact: "+880 1787-208108",
    responsibility: "Receives WhatsApp orders, confirms boot sizing, stock, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Md Shohan",
    role: "Moderator",
    contact: "01992627866",
    displayContact: "+880 1992-627866",
    responsibility: "Assists with glove sizing, product stock inquiries, and order confirmations.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Ruhul",
    role: "Moderator",
    contact: "01308190735",
    displayContact: "+880 1308-190735",
    responsibility: "Handles order verification, combo kit details, and delivery dispatch updates.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Meherj",
    role: "Moderator",
    contact: "01779455940",
    displayContact: "+880 1779-455940",
    responsibility: "Processes customer WhatsApp orders, shipping queries, and product support.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Badhon",
    role: "Moderator",
    contact: "01787208161",
    displayContact: "+880 1787-208161",
    responsibility: "Manages customer consultations, stock verification, and courier bookings.",
    icon: UserCheck,
    isWhatsapp: true,
  },
];

const faqs = [
  {
    q: "How do I place an order for football boots or gear?",
    a: "You can place your order directly via the Dadu App or by contacting any of our verified WhatsApp moderators listed on this site. Share your desired size, product image, and delivery address.",
  },
  {
    q: "Is Cash on Delivery (COD) available across Bangladesh?",
    a: "Yes! We offer nationwide Cash on Delivery across all 64 districts in Bangladesh so you can inspect your shipment upon arrival.",
  },
  {
    q: "How can I confirm my exact football boot size before purchasing?",
    a: "Our WhatsApp moderators provide personalized sizing support. Simply measure your foot length in centimeters or specify your UK/EU size when chatting with our team.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support Cash on Delivery (COD) as well as mobile financial services including bKash, Nagad, and Rocket.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Navbar */}
      <nav className="topbar" aria-label="Main navigation">
        <div className="brand" aria-label="Dadu Khelaghor home">
          <a href={icon.src} target="_blank" rel="noopener noreferrer" aria-label="View Dadu Khelaghor logo">
            <img src={icon.src} alt="Dadu Khelaghor top sports shop in Bangladesh logo" className="logo" />
          </a>
          <a href="#home" aria-label="Go to home"><span>{shop.name}</span></a>
        </div>
        <div className="navlinks">
          <a href="#about" aria-label="Learn about Dadu Khelaghor">About Us</a>
          <a href="#products" aria-label="View Product Categories">Gear Categories</a>
          <a href="#moderators" aria-label="View moderator contacts">WhatsApp Support</a>
          <a href="#seo-guides" aria-label="Sports Shop BD Buying Guide">Sports Guide</a>
          <a href="#contact" aria-label="Contact Dadu Khelaghor">Contact</a>
          <Link href="/help" aria-label="Visit Dadu Khelaghor Help Center" style={{ color: 'var(--brand-accent)', fontWeight: 800 }}>Help Center</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home" aria-label="Hero section with Dadu Khelaghor branding">
        <BootBackground />
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="heroBadge">
            <span className="pulseDot" />
            <span>#1 Rated Sports Equipment Shop in Bangladesh · {shop.location}</span>
          </div>
          <h1>{shop.name} - Top Sports Shop in Bangladesh</h1>
          <p className="banglaName">{shop.banglaName}</p>
          <p className="heroText">{shop.tagline}</p>
          <div className="heroActions">
            <a
              className="primaryButton"
              href={shop.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-download-app"
              aria-label="Download Dadu Khelaghor app from Google Play Store"
            >
              <Download size={18} />
              Download Dadu App
            </a>
            <a
              className="primaryButton"
              href={shop.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-facebook"
              aria-label="Visit Dadu Khelaghor Facebook page"
            >
              <Facebook size={18} />
              Facebook Page
            </a>
            <a
              className="primaryButton"
              href={shop.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-instagram"
              aria-label="Visit Dadu Khelaghor Instagram page"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a
              className="primaryButton"
              href={shop.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-tiktok"
              aria-label="Visit Dadu Khelaghor TikTok page"
            >
              <FaTiktok size={18} aria-hidden="true" />
              TikTok
            </a>
            <a
              className="primaryButton"
              href={shop.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-youtube"
              aria-label="Visit Dadu Khelaghor YouTube channel"
            >
              <Youtube size={18} />
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Highlights & Stats */}
      <section className="statsBand" aria-label="Dadu Khelaghor key highlights and information">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat" key={item.label}>
              <Icon size={24} aria-hidden="true" />
              <span>{item.value}</span>
              <p>{item.label}</p>
            </div>
          );
        })}
      </section>

      {/* About Section */}
      <section className="section intro" id="about" aria-label="About Dadu Khelaghor sports equipment shop">
        <div>
          <p className="sectionLabel">About Dadu Khelaghor</p>
          <h2>Bangladesh&apos;s Premier Sports &amp; Football Equipment Destination</h2>
        </div>
        <article>
          <p>
            Dadu Khelaghor is an active Bangladeshi sports equipment provider operating nationwide via the Dadu App, Facebook, TikTok, and WhatsApp. We specialize in high-performance original football boots, professional goalkeeper gloves, and complete kit packages for athletes and football enthusiasts across Bangladesh.
          </p>
          <p style={{ marginTop: '14px' }}>
            Customers can watch product demonstration videos, verify sizes with dedicated moderators, and enjoy fast Cash on Delivery across all 64 districts.
          </p>
        </article>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="section" style={{ background: '#faf9f6', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} aria-label="Why choose Dadu Khelaghor">
        <div className="sectionHeader">
          <p className="sectionLabel">Why Choose Us</p>
          <h2>Built on Authenticity, Fast Shipping &amp; Trusted Support</h2>
        </div>
        <div className="trustGrid">
          {trustFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div className="trustCard" key={item.title}>
                <Icon size={26} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Product Categories */}
      <section className="section productSection" id="products" aria-label="Product categories offered by Dadu Khelaghor">
        <div className="sectionHeader">
          <p className="sectionLabel">Gear Categories</p>
          <h2>Top-Quality Football &amp; Sports Equipment</h2>
        </div>
        <div className="categoryGrid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article className="categoryCard" key={category.title}>
                <Icon size={28} aria-hidden="true" />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Business Details & Ordering Tips */}
      <section className="section factsSection" aria-label="Detailed information about Dadu Khelaghor">
        <div className="sectionHeader">
          <p className="sectionLabel">Verified Store Profile</p>
          <h2>Official Business Details &amp; Ordering Guidelines</h2>
        </div>
        <div className="factsLayout">
          <div className="factsTable">
            {facts.map((fact) => (
              <div className="factRow" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
          <div className="verifyPanel">
            <h3><CheckCircle2 size={20} style={{ color: 'var(--brand-accent)', display: 'inline', marginRight: '8px' }} /> Smart Ordering Tips</h3>
            <ul>
              <li>Confirm product size &amp; stock with a moderator prior to order confirmation.</li>
              <li>Request nationwide Cash on Delivery (COD) for zero-risk purchasing.</li>
              <li>Ensure you are communicating directly with our official WhatsApp numbers.</li>
              <li>Check our social pages for real customer unboxing reviews and boot testing videos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Moderator WhatsApp Support Grid */}
      <section className="section moderatorSection" id="moderators" aria-label="Dadu Khelaghor moderator team and contacts">
        <div className="sectionHeader">
          <p className="sectionLabel">Active Moderator Support</p>
          <h2>Instant WhatsApp Order &amp; Sizing Assistance</h2>
        </div>
        <div className="moderatorGrid">
          {moderators.map((moderator, index) => {
            const initial = moderator.name.charAt(0);
            return (
              <article className="moderatorCard" key={`${moderator.name}-${index}`}>
                <div className="moderatorHeader">
                  <div className="moderatorAvatar">{initial}</div>
                  <span className="statusIndicator">
                    <span className="pulseDot" /> Online
                  </span>
                </div>
                <span className="moderatorRole">{moderator.role}</span>
                <h3>{moderator.name}</h3>
                <p>{moderator.responsibility}</p>
                <a
                  href={`https://wa.me/880${moderator.contact}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsappBtn"
                  aria-label={`Chat with ${moderator.name} on WhatsApp at ${moderator.displayContact}`}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp ({moderator.displayContact})
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* SEO Buying Guide */}
      <section className="section seoContentSection" id="seo-guides" aria-label="Top Sports Shop in Bangladesh & BD Buying Guide">
        <div className="sectionHeader">
          <p className="sectionLabel">Top Sports Shop Guide</p>
          <h2>Your Guide to Original Football Gear in Bangladesh</h2>
        </div>
        <article className="seoArticle">
          <h3>Why Dadu Khelaghor is Ranked Among the Top Sports Shops in Bangladesh</h3>
          <p>
            If you are searching for a reliable <strong>sport shop in Bangladesh</strong> or <strong>sport shop in BD</strong>, Dadu Khelaghor (দাদু খেলাঘর) is recognized as a market leader. Consistently rated among the <strong>top 10 sports shop BD</strong>, Dadu Khelaghor offers authentic football boots (including Adidas F50 Elite, Nike Mercurial, Predator), goalkeeper gloves, and full sports kit bundles.
          </p>

          <h3>Online Sports Equipment Shopping with Nationwide Delivery</h3>
          <p>
            As a premier <strong>online sports shop Bangladesh</strong>, we offer direct ordering via the Dadu App and WhatsApp. Whether you need <strong>football boots price in BD</strong> information or <strong>futsal shoes Bangladesh</strong>, our moderators ensure instant assistance and express delivery to all 64 districts in BD.
          </p>
        </article>
      </section>

      {/* Help Center Navigation Grid */}
      <section className="section helpCenterSection" aria-label="Help Center links for Dadu Khelaghor">
        <div className="sectionHeader">
          <p className="sectionLabel">Help Center &amp; Support</p>
          <h2>Customer Help &amp; Shopping Guides</h2>
        </div>
        <div className="helpCenterGrid">
          <Link href="/help/how-to-place-order" className="helpCenterCard" id="help-place-order">
            <ShoppingCart size={24} aria-hidden="true" />
            <div>
              <h3>How to Place Order</h3>
              <p>Simple guide to ordering via Dadu App or WhatsApp.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/payment-methods" className="helpCenterCard" id="help-payment">
            <CreditCard size={24} aria-hidden="true" />
            <div>
              <h3>Payment Methods</h3>
              <p>Information on Cash on Delivery, bKash, Nagad &amp; Rocket.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/delivery-information" className="helpCenterCard" id="help-delivery">
            <Truck size={24} aria-hidden="true" />
            <div>
              <h3>Delivery Information</h3>
              <p>Coverage, timelines, and tracking across all 64 districts.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/return-policy" className="helpCenterCard" id="help-returns">
            <RefreshCcw size={24} aria-hidden="true" />
            <div>
              <h3>Return &amp; Exchange</h3>
              <p>Simple policy for wrong sizes or damaged items.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/delete-account" className="helpCenterCard" id="help-delete-account">
            <ShieldCheck size={24} aria-hidden="true" />
            <div>
              <h3>Account Security</h3>
              <p>Manage your Dadu App account and privacy settings.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/contact-support" className="helpCenterCard" id="help-contact">
            <MessageCircle size={24} aria-hidden="true" />
            <div>
              <h3>Direct Support</h3>
              <p>Reach out to customer care via phone or email.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: '#ffffff' }} aria-label="Frequently Asked Questions">
        <div className="sectionHeader">
          <p className="sectionLabel">Got Questions?</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: '840px', display: 'grid', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ color: 'var(--muted)', margin: 0, lineHeight: 1.6, fontSize: '0.94rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Social Links */}
      <section className="contactBand" id="contact" aria-label="Contact information for Dadu Khelaghor">
        <div>
          <p className="sectionLabel">Connect With Us</p>
          <h2>Dadu Khelaghor Official Channels</h2>
          <p>
            Stay updated with our latest boot drops, goalkeeper glove launches, and exclusive deals across our official social platforms.
          </p>
        </div>
        <div className="contactGrid">
          <a
            href={shop.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp"
            aria-label="Download Dadu Khelaghor app to browse products and place orders"
          >
            <Download size={22} aria-hidden="true" />
            <span>Download Dadu App</span>
          </a>
          <a
            href={shop.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-facebook"
            aria-label="Follow Dadu Khelaghor on Facebook for updates and product showcases"
          >
            <Facebook size={22} aria-hidden="true" />
            <span>Facebook Community</span>
          </a>
          <a href={shop.instagramUrl} target="_blank" rel="noopener noreferrer" id="contact-instagram" aria-label="Follow Dadu Khelaghor on Instagram">
            <Instagram size={22} aria-hidden="true" />
            <span>Instagram Showcase</span>
          </a>
          <a href={shop.tiktokUrl} target="_blank" rel="noopener noreferrer" id="contact-tiktok" aria-label="Follow Dadu Khelaghor on TikTok">
            <FaTiktok size={22} aria-hidden="true" />
            <span>TikTok Videos</span>
          </a>
          <a
            href={shop.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-youtube"
            aria-label="Subscribe to Dadu Khelaghor YouTube channel"
          >
            <Youtube size={22} aria-hidden="true" />
            <span>YouTube Reviews</span>
          </a>
        </div>
      </section>

      {/* Developer Information */}
      <section
        className="section developerSection"
        aria-label="Developer and Technical Support"
        style={{
          margin: '40px clamp(20px, 5vw, 72px)',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <p className="sectionLabel" style={{ color: 'var(--brand-accent)', marginBottom: '10px' }}>
          Technical Support &amp; App Development
        </p>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Developed &amp; Maintained by Md. Sayedul Marsalin</h3>
        <p style={{ marginBottom: '20px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          For website updates, app integration inquiries, or technical support, contact the engineer directly.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="mailto:sayadulmorsalin123@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fff',
              padding: '12px 22px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '0.92rem',
              fontWeight: 600,
            }}
          >
            ✉️ sayadulmorsalin123@gmail.com
          </a>
          <a
            href="https://sayedulmarsalin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fff',
              padding: '12px 22px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '0.92rem',
              fontWeight: 600,
            }}
          >
            🌐 sayedulmarsalin.vercel.app
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#0a0f1d',
          color: '#94a3b8',
          padding: '40px clamp(20px, 5vw, 72px) 30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '0.88rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div>
            <strong style={{ color: '#fff', fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
              Dadu Khelaghor (দাদু খেলাঘর)
            </strong>
            <span>Top Sports Equipment Shop in Bangladesh · Rajshahi, BD</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '4px', color: '#fff', fontSize: '0.8rem' }}>bKash</span>
            <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '4px', color: '#fff', fontSize: '0.8rem' }}>Nagad</span>
            <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '4px', color: '#fff', fontSize: '0.8rem' }}>Rocket</span>
            <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '4px', color: '#fff', fontSize: '0.8rem' }}>Cash on Delivery</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Dadu Khelaghor. All rights reserved. Original Sports Equipment in BD.
        </div>
      </footer>
    </main>
  );
}
