import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  CreditCard,
  Truck,
  RefreshCcw,
  UserX,
  MessageCircle,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import "../globals.css";
import "./help.css";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Dadu Khelaghor Help Center — Find guides on how to place orders, payment methods, delivery information, return policy, account deletion, and contact support.",
};

const helpTopics = [
  {
    icon: ShoppingCart,
    title: "How to Place Order",
    description:
      "Step-by-step guide to placing your first order on the DADU app. Learn how to browse products, select sizes, and confirm delivery.",
    href: "/help/how-to-place-order",
    color: "#f68b1e",
    bgColor: "rgba(246, 139, 30, 0.08)",
    tag: "Getting Started",
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
    description:
      "Learn about accepted payment methods — Bkash, Nagad, and Rocket. Understand how to upload payment proof after your transaction.",
    href: "/help/payment-methods",
    color: "#E2136E",
    bgColor: "rgba(226, 19, 110, 0.08)",
    tag: "Payments",
  },
  {
    icon: Truck,
    title: "Delivery Information",
    description:
      "Understand delivery timelines for Rajshahi (1–3 days) and other districts (3–7 days). Track your order and stay updated.",
    href: "/help/delivery-information",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.08)",
    tag: "Delivery",
  },
  {
    icon: RefreshCcw,
    title: "Return Policy",
    description:
      "Received a damaged or wrong product? Learn how to initiate a return within 48 hours using your Order ID and product photo.",
    href: "/help/return-policy",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    tag: "Returns",
  },
  {
    icon: UserX,
    title: "Delete Account",
    description:
      "Want to delete your DADU account? Follow our simple step-by-step guide to permanently remove your account from the app.",
    href: "/help/delete-account",
    color: "#ef4444",
    bgColor: "rgba(239, 68, 68, 0.08)",
    tag: "Account",
  },
  {
    icon: MessageCircle,
    title: "Contact Support",
    description:
      "Can't find what you're looking for? Reach out to our support team via email or phone. We're here to help you.",
    href: "/help/contact-support",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.08)",
    tag: "Support",
  },
];

export default function HelpCenter() {
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
            <span>Help Center</span>
          </div>
        </div>
      </nav>

      <section className="helpHero helpIndexHero">
        <div className="helpHeroInner">
          <div className="helpHeroBadge">
            <BookOpen size={16} />
            Help Center
          </div>
          <h1>How can we help you?</h1>
          <p>
            Welcome to the Dadu Khelaghor Help Center. Browse the articles below
            to find answers to your questions.
          </p>
        </div>
      </section>

      <section className="helpContent">
        <div className="helpContentInner">
          <div className="helpTopicsGrid">
            {helpTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  href={topic.href}
                  className="helpTopicCard"
                  key={topic.title}
                  style={{ "--topic-color": topic.color, "--topic-bg": topic.bgColor } as React.CSSProperties}
                >
                  <div className="helpTopicTag">{topic.tag}</div>
                  <div className="helpTopicIcon" style={{ background: topic.bgColor, color: topic.color }}>
                    <Icon size={28} />
                  </div>
                  <h2>{topic.title}</h2>
                  <p>{topic.description}</p>
                  <div className="helpTopicArrow">
                    Read Article <ChevronRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="helpCenterContact">
            <MessageCircle size={24} />
            <div>
              <h3>Still need help?</h3>
              <p>Our support team is ready to assist you.</p>
            </div>
            <Link href="/help/contact-support" className="helpContactBtn">
              Contact Support
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
