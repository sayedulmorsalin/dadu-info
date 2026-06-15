import {
  Download,
  Facebook,
  Footprints,
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
} from "lucide-react";
import BootBackground from "./BootBackground";
import icon from "../assets/icon.jpg";

const shop = {
  name: "Dadu Khelaghor",
  banglaName: "দাদু খেলাঘর",
  location: "Rajshahi, Bangladesh",
  businessType: "Sports Equipment",
  audience: "Football players, athletes & sports enthusiasts",
  tagline:
    "One of Bangladesh's best sports equipment shops, offering high-quality football boots, goalkeeper gloves, and full combo kits at great prices.",
  youtubeUrl: "https://www.youtube.com/@dadukhelaghor",
  facebookUrl: "https://www.facebook.com/profile.php?id=100094599728841",
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
    icon: Phone,
    isWhatsapp: true,
  },
  {
    name: "Rimon",
    role: "Moderator",
    contact: "01787208108",
    displayContact: "+880 1787-208108",
    responsibility: "Receives WhatsApp orders, confirms stock, sizes, and delivery details.",
    icon: Phone,
    isWhatsapp: true,
  },
  {
    name: "Md Shohan",
    role: "Moderator",
    contact: "01992627866",
    displayContact: "+880 1992-627866",
    responsibility: "Manages group membership, moderation, and customer communications.",
    icon: ShieldCheck,
    isWhatsapp: true,
  },
  {
    name: "Ruhul",
    role: "Moderator",
    contact: "01308190735",
    displayContact: "+880 1308-190735",
    responsibility: "Moderates group content and supports customer inquiries.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Meherj",
    role: "Moderator",
    contact: "01779455940",
    displayContact: "+880 1779-455940",
    responsibility: "Assists with community management and order updates.",
    icon: UserCheck,
    isWhatsapp: true,
  },
  {
    name: "Badhon",
    role: "Moderator",
    contact: "01787208161",
    displayContact: "+8801787208161",
    responsibility: "Keeps product videos, new arrivals, and public updates organized for customers.",
    icon: ShieldCheck,
    isWhatsapp: true,
  },
];

export default function Home() {
  // Structured data for product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: categories.map((cat, idx) => ({
      "@type": "Product",
      position: idx + 1,
      name: cat.title,
      description: cat.description,
      image: "https://dadu-khelaghor.vercel.app/images/products.png",
    })),
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What payment methods does Dadu Khelaghor accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dadu Khelaghor accepts Cash on Delivery (COD) and WhatsApp payments. You can order through the Dadu App or by contacting any moderator on WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver across Bangladesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Dadu Khelaghor offers delivery services across all of Bangladesh. Confirm delivery details with any moderator when placing your order.",
        },
      },
      {
        "@type": "Question",
        name: "How can I verify the authenticity of products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All products are showcased on the Facebook page and verified through customer reviews. Always check recent comments and ask moderators for product details before ordering.",
        },
      },
    ],
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="topbar" aria-label="Main navigation">
        <div className="brand" aria-label="Dadu Khelaghor home">
          <a href={icon.src} target="_blank" rel="noopener noreferrer" aria-label="View Dadu Khelaghor logo">
            <img src={icon.src} alt="Dadu Khelaghor sports equipment shop logo" className="logo" />
          </a>
          <a href="#home" aria-label="Go to home"><span>{shop.name}</span></a>
        </div>
        <div className="navlinks">
          <a href="#about" aria-label="Learn about Dadu Khelaghor">About Dadu Khelaghor</a>
          <a href="#moderators" aria-label="View moderator contacts">Moderators</a>
          <a href="#contact" aria-label="Contact Dadu Khelaghor">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home" aria-label="Hero section with Dadu Khelaghor branding">
        <BootBackground />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Sports Equipment · {shop.location}</p>
          <h1>{shop.name} - Premium Football Boots & Sports Gear in Bangladesh</h1>
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

      <section className="section trustSection" aria-label="Why choose Dadu Khelaghor">
        <div className="sectionHeader">
          <p className="sectionLabel">Why choose Dadu Khelaghor</p>
          <h2>Gear up with Bangladesh&apos;s trusted sports shop.</h2>
        </div>
        <div className="trustGrid">
          <article>
            <ShieldCheck size={26} aria-hidden="true" />
            <h3>Quality gear</h3>
            <p>
              Genuine football boots and goalkeeper gloves from trusted brands
              like Adidas — verified through Facebook product showcases and 
              customer testimonials.
            </p>
          </article>
          <article>
            <Star size={26} aria-hidden="true" />
            <h3>Active channel</h3>
            <p>
              Regular product videos on Facebook keep you updated on new arrivals,
              prices, and seasonal combo offers. Our active community ensures 
              responsive customer service.
            </p>
          </article>
          <article>
            <Truck size={26} aria-hidden="true" />
            <h3>Delivery across Bangladesh</h3>
            <p>
              Order via Dadu App or WhatsApp and have your sports gear delivered across
              Bangladesh quickly and conveniently with reliable courier services.
            </p>
          </article>
        </div>
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
            href={shop.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-facebook"
            aria-label="Follow Dadu Khelaghor on Facebook for updates and product showcases"
          >
            <Facebook size={22} aria-hidden="true" />
            <span>Dadu Khelaghor on Facebook</span>
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
          <a
            href={shop.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp"
            aria-label="Download Dadu Khelaghor app to browse products and place orders"
          >
            <Phone size={22} aria-hidden="true" />
            <span>Order via Dadu App</span>
          </a>
        </div>
      </section>
    </main>
  );
}
