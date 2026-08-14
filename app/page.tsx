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
    "Recognized as a top sports shop in Bangladesh, Dadu Khelaghor offers high-quality football boots, goalkeeper gloves, and sports gear nationwide.",
  youtubeUrl: "https://www.youtube.com/@dadukhelaghor",
  facebookUrl: "https://www.facebook.com/profile.php?id=100094599728841",
  instagramUrl: "https://www.instagram.com/dadukhelaghor/",
  tiktokUrl: "https://www.tiktok.com/@dadukhelaghor1",
  appUrl: "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu",
  contactName: "Russell",
  lastChecked: "June 14, 2026",
};

const categories = [
  {
    title: "Football Boots",
    description:
      "Adidas F50 steel spikes, football cleats, and premium boots for all playing surfaces.",
    icon: Footprints,
  },
  {
    title: "Goalkeeper Gloves",
    description:
      "Professional and training-level goalkeeper gloves with strong grip and wrist protection.",
    icon: ShieldCheck,
  },
  {
    title: "Full Combo Kits",
    description:
      "Complete combo sets bundling boots, gloves, and gear — great value .",
    icon: ShoppingBag,
  },
  {
    title: "Sports Accessories",
    description:
      "Footballs, shin guards, and various sports accessories for players at every level.",
    icon: Zap,
  },
];

const highlights = [
  { label: "Business type", value: shop.businessType, icon: Trophy },
  { label: "Search name", value: shop.banglaName, icon: Star },
  { label: "Location", value: shop.location, icon: MapPin },
];



const facts = [
  { label: "Brand name", value: shop.name },
  { label: "Bangla name", value: shop.banglaName },
  { label: "Owner", value: "Ahsanul Haque Siam" },
  { label: "Category", value: "Sports equipment / football gear" },
  { label: "Location", value: shop.location },
  { label: "Facebook page", value: "Dadu Khelaghor" },
  { label: "Audience", value: shop.audience },
  
];

const moderators = [
  {
    name: "Rasel",
    role: "Moderator",
    contact: "01782124891",
    displayContact: "+880 1782-124891",
    responsibility: "Receives WhatsApp orders, confirms stock, sizes, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Rimon",
    role: "Moderator",
    contact: "01787208108",
    displayContact: "+880 1787-208108",
    responsibility: "Receives WhatsApp orders, confirms stock, sizes, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Md Shohan",
    role: "Moderator",
    contact: "01992627866",
    displayContact: "+880 1992-627866",
    responsibility: "Receives WhatsApp orders, confirms stock, sizes, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Ruhul",
    role: "Moderator",
    contact: "01308190735",
    displayContact: "+880 1308-190735",
    responsibility: "Receives WhatsApp orders, confirms stock, sizes, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Meherj",
    role: "Moderator",
    contact: "01779455940",
    displayContact: "+880 1779-455940",
    responsibility: "Receives WhatsApp orders, confirms stock, sizes, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Badhon",
    role: "Moderator",
    contact: "01787208161",
    displayContact: "+8801787208161",
    responsibility: "Receives WhatsApp orders, confirms stock, sizes, and delivery details.",
    icon: UserCheck,
    isWhatsapp: true,
  },
];

export default function Home() {

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the top sports shop in Bangladesh for authentic football boots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dadu Khelaghor (দাদু খেলাঘর) is recognized as a top sports shop in Bangladesh for authentic football boots (Adidas F50, Nike Mercurial), goalkeeper gloves, and full sports gear with fast Cash on Delivery across Bangladesh.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Dadu Khelaghor ranked among the top 10 sports shops in Bangladesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dadu Khelaghor is ranked among the top 10 sports shops in Bangladesh due to its guaranteed original product quality, extensive selection of football equipment, 50,000+ happy customers, responsive WhatsApp moderators, and nationwide delivery.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods does Dadu Khelaghor accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dadu Khelaghor accepts Cash on Delivery (COD) and mobile payment methods like bKash, Nagad, and Rocket. You can order through the Dadu App or by contacting any moderator on WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver sports equipment across all districts in Bangladesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Dadu Khelaghor offers courier delivery services across all 64 districts of Bangladesh. Confirm delivery details with any moderator when placing your order.",
        },
      },
    ],
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="topbar" aria-label="Main navigation">
        <div className="brand" aria-label="Dadu Khelaghor home">
          <a href={icon.src} target="_blank" rel="noopener noreferrer" aria-label="View Dadu Khelaghor logo">
            <img src={icon.src} alt="Dadu Khelaghor top sports shop in Bangladesh logo" className="logo" />
          </a>
          <a href="#home" aria-label="Go to home"><span>{shop.name}</span></a>
        </div>
        <div className="navlinks">
          <a href="#about" aria-label="Learn about Dadu Khelaghor">About Dadu Khelaghor</a>
          <a href="#seo-guides" aria-label="Top Sports Shop Bangladesh Guide">Sports Shop Guide</a>
          <a href="#moderators" aria-label="View moderator contacts">Moderators</a>
          <a href="#contact" aria-label="Contact Dadu Khelaghor">Contact</a>
          <Link href="/help" aria-label="Visit Dadu Khelaghor Help Center" style={{ color: 'var(--accent)', fontWeight: 900 }}>Help Center</Link>
        </div>
      </nav>

      <section className="hero" id="home" aria-label="Hero section with Dadu Khelaghor branding">
        <BootBackground />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Top Sports Shop in Bangladesh · {shop.location}</p>
          <h1>{shop.name} - Top Sports Shop in Bangladesh for Football Boots & Gear</h1>
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
              Instagram Page
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
              TikTok Page
            </a>

              <a className="primaryButton"
              href={shop.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-youtube"
              aria-label="Visit Dadu Khelaghor YouTube channel"
            >
              <Youtube size={18} />
              YouTube Channel
            </a>
          </div>
        </div>
      </section>

      <section className="statsBand" aria-label="Dadu Khelaghor key highlights and information">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat" key={item.label}>
              <Icon size={22} aria-hidden="true" />
              <span>{item.value}</span>
              <p>{item.label}</p>
            </div>
          );
        })}
      </section>

      <section className="section intro" id="about" aria-label="About Dadu Khelaghor sports equipment shop">
        <div>
          <p className="sectionLabel">About the shop</p>
          <h2>Bangladesh&apos;s favourite sports gear destination.</h2>
        </div>
        <article>
          <p>
            Dadu Khelaghor is an active Bangladeshi sports equipment seller
            operating primarily through Facebook, TikTok, and WhatsApp. The shop
            showcases premium football boots, professional goalkeeper gloves, 
            and combo kit bundles for athletes across Bangladesh. Customers can 
            browse product videos and place orders directly via Dadu App and WhatsApp 
            with any of our experienced moderators. With a focus on quality and 
            customer service, Dadu Khelaghor has become a trusted name for sports 
            enthusiasts seeking genuine football equipment at competitive prices.
          </p>
        </article>
      </section>

      <section
        className="section factsSection"
        aria-label="Detailed information about Dadu Khelaghor"
      >
        <div className="sectionHeader">
          <h2>Details of Dadu Khelaghor</h2>
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
            <h3>Order tips</h3>
            <ul>
              <li>Always verify product availability before payment</li>
              <li>Ask for Cash on Delivery (COD) where possible</li>
              <li>Check recent Facebook comments for buyer reviews</li>
              <li>Confirm you are messaging the official WhatsApp numbers</li>
              <li>Prices may vary — always confirm before ordering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section productSection" id="products" aria-label="Product categories offered by Dadu Khelaghor">
        <div className="sectionHeader">
          <p className="sectionLabel">Product categories</p>
          <h2>Top-quality football gear for Bangladeshi players.</h2>
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


      {/* SEO Content Sections */}
      <section className="section seoContentSection" id="seo-guides" aria-label="Top Sports Shop in Bangladesh Buying Guide">
        <div className="sectionHeader">
          <p className="sectionLabel">Top Sports Shop Guide</p>
          <h2>Your Ultimate Guide to Finding a Top Sport Shop in Bangladesh</h2>
        </div>
        <article className="seoArticle">
          <h3>Why Dadu Khelaghor is Ranked Among the Top 10 Sports Shops in Bangladesh</h3>
          <p>
            If you are searching for a reliable <strong>sport shop in bangladesh</strong> or looking for the <strong>top sports shop in bangladesh</strong>, Dadu Khelaghor (দাদু খেলাঘর) stands out as a leading market choice. Ranked consistently among the <strong>top 10 sports shop in bangladesh</strong>, Dadu Khelaghor specializes in original football boots (including Adidas F50 Elite, Nike Mercurial, Predator), professional goalkeeper gloves, and complete sports equipment packages. With verified customer reviews and fast delivery to all 64 districts, Dadu Khelaghor is the trusted choice for professional players and sports enthusiasts across Bangladesh.
          </p>

          <h3>Looking for a Premier Online Sports Shop in Bangladesh?</h3>
          <p>
            As a leading <strong>online sports shop bangladesh</strong>, Dadu Khelaghor provides convenient online browsing and direct ordering via the Dadu App and WhatsApp. Whether you are shopping for a <strong>sports item shop bangladesh</strong> online or seeking reliable <strong>cash on delivery sports shop bangladesh</strong> services, Dadu Khelaghor brings original quality products directly to your doorstep.
          </p>

          <h3>Football Boots Price in Bangladesh & Authentic Silos</h3>
          <p>
            Understanding the <strong>football boots price in bangladesh</strong> is essential when purchasing performance cleats. At Dadu Khelaghor, we maintain fair and competitive rates for <strong>adidas football boots price in bangladesh</strong>, <strong>nike mercurial boots price in bd</strong>, and durable <strong>futsal shoes bangladesh</strong>. We provide transparent pricing, video product verification, and expert sizing assistance so you receive the exact fit and model you need.
          </p>

          <h3>Serving Athletes in Dhaka, Rajshahi, Chittagong & Nationwide</h3>
          <p>
            Whether you are searching for a <strong>sports shop in rajshahi</strong> near Shaheb Bazar or looking for a fast-shipping <strong>sports shop in dhaka</strong>, Dadu Khelaghor fulfills orders daily across all major Bangladeshi cities including Chittagong, Sylhet, Khulna, and Barisal. From professional <strong>goalkeeper gloves price in bd</strong> to full football kit combos, we ensure every athlete gets top-tier equipment fast.
          </p>

          <h3>How to Choose the Right Football Boots in BD?</h3>
          <p>
            Selecting the right <strong>football shoes in Bangladesh</strong> depends on your playing surface, position, and foot shape. For natural grass, Firm Ground (FG) boots with molded studs are ideal. If you play on artificial turf in Dhaka or Rajshahi, choose specific <strong>futsal shoes Bangladesh</strong> or Artificial Grass (AG) boots to prevent injuries and maintain traction. Attackers often choose lightweight speed boots like the Adidas F50, while midfielders prefer control silos like the Nike Phantom or Adidas Predator.
          </p>

          <h3>Nationwide Express Delivery Across Bangladesh</h3>
          <p>
            No matter where you live in Bangladesh, accessing top-tier <strong>sports equipment Bangladesh</strong> is fast and easy. Orders placed with Dadu Khelaghor are processed promptly and shipped directly to your door with full tracking. Explore our full catalog via the Dadu App or contact our moderators on WhatsApp to place your order today!
          </p>
        </article>
      </section>

      <section className="section moderatorSection" id="moderators" aria-label="Dadu Khelaghor moderator team and contacts">
        <div className="sectionHeader">
          <p className="sectionLabel">Moderator list</p>
          <h2>Dadu Khelaghor team contacts and responsibilities.</h2>
        </div>
        <div className="moderatorGrid">
          {moderators.map((moderator, index) => {
            const Icon = moderator.icon;
            return (
              <article className="moderatorCard" key={`${moderator.name}-${index}`}>
                <Icon size={26} aria-hidden="true" />
                <div>
                  <span>{moderator.role}</span>
                  <h3>{moderator.name}</h3>
                  <p>{moderator.responsibility}</p>
                  {moderator.isWhatsapp ? (
                    <a
                      href={`https://wa.me/880${moderator.contact}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="moderatorLink"
                      aria-label={`Contact ${moderator.name} on WhatsApp at ${moderator.displayContact}`}
                    >
                      {moderator.displayContact}
                    </a>
                  ) : (
                    <a
                      href={shop.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="moderatorLink"
                      aria-label={`Visit Dadu Khelaghor YouTube channel`}
                    >
                      {moderator.displayContact}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section helpCenterSection" aria-label="Help Center links for Dadu Khelaghor">
        <div className="sectionHeader">
          <p className="sectionLabel">Help Center</p>
          <h2>Quick guides &amp; support articles.</h2>
        </div>
        <div className="helpCenterGrid">
          <Link href="/help/how-to-place-order" className="helpCenterCard" id="help-place-order">
            <ShoppingCart size={24} aria-hidden="true" />
            <div>
              <h3>How to Place Order</h3>
              <p>Step-by-step guide to placing your first order on the DADU app.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/payment-methods" className="helpCenterCard" id="help-payment">
            <CreditCard size={24} aria-hidden="true" />
            <div>
              <h3>Payment Methods</h3>
              <p>Learn how to pay with Bkash, Nagad, or Rocket.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/delivery-information" className="helpCenterCard" id="help-delivery">
            <Truck size={24} aria-hidden="true" />
            <div>
              <h3>Delivery Information</h3>
              <p>Timelines, tracking, and delivery zones across Bangladesh.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/return-policy" className="helpCenterCard" id="help-returns">
            <RefreshCcw size={24} aria-hidden="true" />
            <div>
              <h3>Return Policy</h3>
              <p>Report damaged or wrong products within 48 hours.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/delete-account" className="helpCenterCard" id="help-delete-account">
            <ShieldCheck size={24} aria-hidden="true" />
            <div>
              <h3>Delete Account</h3>
              <p>How to permanently delete your DADU account.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
          <Link href="/help/contact-support" className="helpCenterCard" id="help-contact">
            <MessageCircle size={24} aria-hidden="true" />
            <div>
              <h3>Contact Support</h3>
              <p>Reach our team via email or phone for any issue.</p>
            </div>
            <ChevronRight size={18} className="helpCenterArrow" />
          </Link>
        </div>
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/help" className="primaryButton" style={{ display: 'inline-flex', margin: '0 auto' }}>
            <BookOpen size={18} />
            View All Help Articles
          </Link>
        </div>
      </section>

      <section className="contactBand" id="contact" aria-label="Contact information for Dadu Khelaghor">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2>Connect with Dadu Khelaghor</h2>
          <p>
            Place your order or ask about products directly through WhatsApp or
            visit our Facebook page for the latest gear reviews and product updates.
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
            <span>Order via Dadu App</span>
          </a>
          <a
            href={shop.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-facebook"
            aria-label="Follow Dadu Khelaghor on Facebook for updates and product showcases"
          >
            <Facebook size={22} aria-hidden="true" />
            <span>Dadu Khelaghor on Facebook</span>
          </a>
          <a href={shop.instagramUrl} target="_blank" rel="noopener noreferrer" id="contact-instagram" aria-label="Follow Dadu Khelaghor on Instagram for product photos and updates">
            <Instagram size={22} aria-hidden="true" />
            <span>Dadu Khelaghor on Instagram</span>
          </a>
          <a href={shop.tiktokUrl} target="_blank" rel="noopener noreferrer" id="contact-tiktok" aria-label="Follow Dadu Khelaghor on TikTok for product videos and updates">
            <FaTiktok size={22} aria-hidden="true" />
            <span>Dadu Khelaghor on TikTok</span>
          </a>
          <a
            href={shop.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-youtube"
            aria-label="Subscribe to Dadu Khelaghor YouTube channel for product reviews"
          >
            <Youtube size={22} aria-hidden="true" />
            <span>Dadu Khelaghor on YouTube</span>
          </a>
          
        </div>
      </section>

      {/* Developer Segment */}
      <section className="section developerSection" aria-label="Developer and Technical Support" style={{
        marginTop: '60px',
        padding: '40px 20px',
        backgroundColor: '#111',
        color: '#fff',
        borderRadius: '16px',
        textAlign: 'center',
        border: '1px solid #333'
      }}>
        <p className="sectionLabel" style={{ color: 'var(--accent)', marginBottom: '10px' }}>Developer &amp; Technical Support</p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Md. Sayedul Marsalin</h3>
        <p style={{ marginBottom: '10px', color: '#ccc' }}>
          For technical inquiries, app support, or website issues, please contact the developer directly.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          <a href="mailto:sayadulmorsalin123@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', padding: '10px 20px', backgroundColor: '#222', borderRadius: '8px', border: '1px solid #444' }}>
            ✉️ sayadulmorsalin123@gmail.com
          </a>
          <a href="https://sayedulmarsalin.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', padding: '10px 20px', backgroundColor: '#222', borderRadius: '8px', border: '1px solid #444' }}>
            🌐 sayedulmarsalin.vercel.app
          </a>
        </div>
      </section>
    </main>
  );
}
