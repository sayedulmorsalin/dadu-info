import {
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

const shop = {
  name: "Dadu Khelaghor",
  banglaName: "দাদু খেলাঘর",
  location: "Bangladesh",
  businessType: "Sports Equipment",
  audience: "Football players, athletes & sports enthusiasts",
  tagline:
    "Bangladesh's go-to sports equipment channel — quality football boots, goalkeeper gloves, and full combo kits at great prices.",
  youtubeUrl: "https://www.youtube.com/@dadukhelaghor",
  facebookUrl: "https://www.facebook.com/search/top?q=dadu%20khelaghor",
  whatsapp1: "01787208108",
  whatsapp2: "01782124891",
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
      "Complete combo sets bundling boots, gloves, and gear — great value starting from 3,600 BDT.",
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
  { label: "WhatsApp order", value: shop.whatsapp1, icon: Phone },
  { label: "Country", value: shop.location, icon: MapPin },
];

const howToOrder = [
  { title: "Watch product videos on YouTube", icon: Youtube },
  { title: "Choose your size and combo kit", icon: PackageCheck },
  { title: "Contact via WhatsApp to confirm order", icon: MessageCircle },
  { title: "Delivery arranged across Bangladesh", icon: Truck },
];

const facts = [
  { label: "Brand name", value: shop.name },
  { label: "Bangla name", value: shop.banglaName },
  { label: "Category", value: "Sports equipment / football gear" },
  { label: "Country", value: shop.location },
  { label: "WhatsApp (Order)", value: shop.whatsapp1 },
  { label: "WhatsApp (Russell)", value: shop.whatsapp2 },
  { label: "YouTube channel", value: "@dadukhelaghor" },
  { label: "Audience", value: shop.audience },
  { label: "Sample price", value: "Full combo set from 3,600 BDT" },
];

const moderators = [
  {
    name: shop.contactName,
    role: "Primary order moderator",
    contact: shop.whatsapp2,
    responsibility: "Handles order confirmation, product questions, and customer support.",
    icon: UserCheck,
  },
  {
    name: "Dadu Khelaghor Team",
    role: "Sales support",
    contact: shop.whatsapp1,
    responsibility: "Receives WhatsApp orders and confirms stock, sizes, prices, and delivery details.",
    icon: Phone,
  },
  {
    name: "Content moderator",
    role: "YouTube and social updates",
    contact: "@dadukhelaghor",
    responsibility: "Keeps product videos, new arrivals, and public updates organized for customers.",
    icon: Youtube,
  },
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Dadu Khelaghor home">
          <Trophy size={22} />
          <span>{shop.name}</span>
        </a>
        <div className="navlinks">
          <a href="#products">Products</a>
          <a href="#order">How to Order</a>
          <a href="#moderators">Moderators</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <BootBackground />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Sports Equipment · {shop.location}</p>
          <h1>{shop.name}</h1>
          <p className="banglaName">{shop.banglaName}</p>
          <p className="heroText">{shop.tagline}</p>
          <div className="heroActions">
            <a
              className="primaryButton"
              href={shop.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-youtube"
            >
              <Youtube size={18} />
              Watch on YouTube
            </a>
            <a
              className="secondaryButton"
              href={`https://wa.me/880${shop.whatsapp1}`}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-whatsapp"
            >
              <Phone size={18} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="statsBand" aria-label="Dadu Khelaghor highlights">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat" key={item.label}>
              <Icon size={22} />
              <span>{item.value}</span>
              <p>{item.label}</p>
            </div>
          );
        })}
      </section>

      <section className="section intro">
        <div>
          <p className="sectionLabel">About the channel</p>
          <h2>Bangladesh&apos;s favourite sports gear destination.</h2>
        </div>
        <p>
          Dadu Khelaghor is an active Bangladeshi sports equipment seller
          operating primarily through YouTube and WhatsApp. The channel
          showcases football boots (including Adidas F50 steel spikes),
          goalkeeper gloves, and combo kit bundles for athletes across
          Bangladesh. Customers can browse product videos on YouTube and place
          orders directly via WhatsApp with contact Russell at{" "}
          <strong>{shop.whatsapp2}</strong>.
        </p>
      </section>

      <section
        className="section factsSection"
        aria-label="Dadu Khelaghor information"
      >
        <div className="sectionHeader">
          <p className="sectionLabel">Verified information</p>
          <h2>Known details sourced from public listings.</h2>
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
              <li>Check recent YouTube comments for buyer reviews</li>
              <li>Confirm you are messaging the official WhatsApp numbers</li>
              <li>Prices may vary — always confirm before ordering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section productSection" id="products">
        <div className="sectionHeader">
          <p className="sectionLabel">Product categories</p>
          <h2>Top-quality football gear for Bangladeshi players.</h2>
        </div>
        <div className="categoryGrid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article className="categoryCard" key={category.title}>
                <Icon size={28} />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="appBand" id="order">
        <div className="phoneMock" aria-hidden="true">
          <div className="phoneTop" />
          <div className="appTile">
            <Youtube size={34} />
            <span>YouTube</span>
          </div>
          <div className="appRows">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="appCopy">
          <p className="sectionLabel">How to order</p>
          <h2>Browse, pick, and order via WhatsApp in minutes.</h2>
          <p>
            Dadu Khelaghor operates through its active YouTube channel
            (@dadukhelaghor). Browse product videos to find what you need, then
            message the team on WhatsApp to place your order and arrange
            delivery anywhere in Bangladesh.
          </p>
          <div className="serviceList">
            {howToOrder.map((step) => {
              const Icon = step.icon;
              return (
                <div className="service" key={step.title}>
                  <Icon size={20} />
                  <span>{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section trustSection">
        <div className="sectionHeader">
          <p className="sectionLabel">Why choose Dadu Khelaghor</p>
          <h2>Gear up with Bangladesh&apos;s trusted sports channel.</h2>
        </div>
        <div className="trustGrid">
          <div>
            <ShieldCheck size={26} />
            <h3>Quality gear</h3>
            <p>
              Genuine football boots and goalkeeper gloves from trusted brands
              like Adidas — verified through YouTube product showcases.
            </p>
          </div>
          <div>
            <Star size={26} />
            <h3>Active channel</h3>
            <p>
              Regular product videos on YouTube keep you updated on new arrivals,
              prices, and seasonal combo offers.
            </p>
          </div>
          <div>
            <Truck size={26} />
            <h3>Delivery across BD</h3>
            <p>
              Order via WhatsApp and have your sports gear delivered across
              Bangladesh quickly and conveniently.
            </p>
          </div>
        </div>
      </section>

      <section className="section moderatorSection" id="moderators">
        <div className="sectionHeader">
          <p className="sectionLabel">Moderator list</p>
          <h2>Dadu Khelaghor team contacts and responsibilities.</h2>
        </div>
        <div className="moderatorGrid">
          {moderators.map((moderator) => {
            const Icon = moderator.icon;
            return (
              <article className="moderatorCard" key={moderator.role}>
                <Icon size={26} />
                <div>
                  <span>{moderator.role}</span>
                  <h3>{moderator.name}</h3>
                  <p>{moderator.responsibility}</p>
                  <strong>{moderator.contact}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contactBand" id="contact">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2>Connect with Dadu Khelaghor</h2>
          <p>
            Place your order or ask about products directly through WhatsApp or
            visit the YouTube channel for the latest gear reviews.
          </p>
        </div>
        <div className="contactGrid">
          <a
            href={shop.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-youtube"
          >
            <Youtube size={22} />
            <span>@dadukhelaghor on YouTube</span>
          </a>
          <a
            href={shop.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-facebook"
          >
            <Facebook size={22} />
            <span>Dadu Khelaghor on Facebook</span>
          </a>
          <a
            href={`https://wa.me/880${shop.whatsapp1}`}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp1"
          >
            <Phone size={22} />
            <span>WhatsApp: {shop.whatsapp1}</span>
          </a>
          <a
            href={`https://wa.me/880${shop.whatsapp2}`}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp2"
          >
            <MessageCircle size={22} />
            <span>Russell: {shop.whatsapp2}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
