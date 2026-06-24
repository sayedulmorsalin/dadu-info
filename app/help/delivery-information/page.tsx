import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Truck,
  ChevronRight,
  MapPin,
  Clock,
  Bell,
  Package,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import "../../globals.css";
import "../help.css";

export const metadata: Metadata = {
  title: "Delivery Information",
  description:
    "Learn about delivery times, areas, and tracking for Dadu Khelaghor orders. Rajshahi: 1-3 days. Outside Rajshahi: 3-7 working days.",
};

const deliveryZones = [
  {
    zone: "Rajshahi City",
    icon: MapPin,
    time: "1–3 Working Days",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.08)",
    details: [
      "Same-day delivery possible for select orders placed before 12 PM",
      "Delivery agents will contact you before arrival",
      "Delivery available 7 days a week",
    ],
  },
  {
    zone: "Outside Rajshahi",
    icon: Truck,
    time: "3–7 Working Days",
    color: "#f68b1e",
    bgColor: "rgba(246, 139, 30, 0.08)",
    details: [
      "Covers all districts across Bangladesh",
      "Orders shipped via reliable courier partners",
      "You will receive a tracking update via notification",
    ],
  },
];

const deliverySteps = [
  {
    icon: Package,
    title: "Order Confirmed",
    description: "Your order is verified and confirmed by our team after payment is reviewed.",
  },
  {
    icon: CheckCircle,
    title: "Order Packed",
    description: "Your items are carefully packed and quality-checked before dispatch.",
  },
  {
    icon: Truck,
    title: "Shipped",
    description: "Your package is handed to our courier partner and on its way to you.",
  },
  {
    icon: Bell,
    title: "Notification Sent",
    description: "You receive an in-app notification with delivery updates and estimated arrival.",
  },
  {
    icon: MapPin,
    title: "Delivered",
    description: "Your order arrives at your doorstep. Enjoy your new sports gear!",
  },
];

export default function DeliveryInformation() {
  return (
    <main className="helpPage">
      <nav className="helpTopbar">
        <div className="helpNavInner">
          <Link href="/" className="helpBackBtn">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <div className="helpBreadcrumb">
            <Link href="/">Dadu Khelaghor</Link>
            <ChevronRight size={14} />
            <Link href="/help">Help Center</Link>
            <ChevronRight size={14} />
            <span>Delivery Information</span>
          </div>
        </div>
      </nav>

      <section className="helpHero">
        <div className="helpHeroInner">
          <div className="helpHeroBadge">
            <Truck size={16} />
            Delivery Guide
          </div>
          <h1>Delivery Information</h1>
          <p>
            We deliver across all of Bangladesh. Delivery times depend on your
            location. You will receive real-time updates through in-app
            notifications.
          </p>
        </div>
      </section>

      <section className="helpContent">
        <div className="helpContentInner">

          <h2 className="helpSectionTitle">Delivery Zones & Timelines</h2>

          <div className="deliveryZonesGrid">
            {deliveryZones.map((zone) => {
              const Icon = zone.icon;
              return (
                <article
                  className="deliveryZoneCard"
                  key={zone.zone}
                  style={{ "--zone-color": zone.color, "--zone-bg": zone.bgColor } as React.CSSProperties}
                >
                  <div className="deliveryZoneHeader">
                    <div className="deliveryZoneIcon" style={{ background: zone.bgColor, color: zone.color }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3>{zone.zone}</h3>
                      <div className="deliveryTime" style={{ color: zone.color }}>
                        <Clock size={14} />
                        {zone.time}
                      </div>
                    </div>
                  </div>
                  <ul className="deliveryDetails">
                    {zone.details.map((detail, i) => (
                      <li key={i}>
                        <CheckCircle size={14} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <h2 className="helpSectionTitle" style={{ marginTop: "48px" }}>Delivery Process</h2>

          <div className="deliveryTimeline">
            {deliverySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="timelineItem" key={step.title}>
                  <div className="timelineIcon">
                    <Icon size={20} />
                    {index < deliverySteps.length - 1 && <div className="timelineLine" />}
                  </div>
                  <div className="timelineContent">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="helpTip">
            <Bell size={20} />
            <div>
              <h3>Stay Updated</h3>
              <p>
                Enable notifications in the DADU app to receive real-time updates about your delivery status. You can also contact our support team to track your order manually.
              </p>
            </div>
          </aside>

          <aside className="helpWarning" style={{ marginTop: "16px" }}>
            <AlertCircle size={20} />
            <div>
              <h3>Note on Working Days</h3>
              <p>
                Delivery timelines exclude public holidays and weekends where courier services are unavailable. Extreme weather conditions may also cause delays.
              </p>
            </div>
          </aside>

          <div className="helpRelated">
            <h3>Related Help Articles</h3>
            <div className="relatedGrid">
              <Link href="/help/how-to-place-order" className="relatedCard">
                <Package size={20} />
                <span>How to Place Order</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="/help/return-policy" className="relatedCard">
                <ArrowLeft size={20} />
                <span>Return Policy</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="/help/contact-support" className="relatedCard">
                <CheckCircle size={20} />
                <span>Contact Support</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
