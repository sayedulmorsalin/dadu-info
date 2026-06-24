import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Package,
  Camera,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Clock,
  RefreshCcw,
  XCircle,
} from "lucide-react";
import "../../globals.css";
import "../help.css";

export const metadata: Metadata = {
  title: "Return Policy | Dadu Khelaghor Help Center",
  description:
    "Learn about Dadu Khelaghor's return policy. Contact support within 48 hours for damaged or incorrect products with your Order ID and product photo.",
};

const returnSteps = [
  {
    step: 1,
    icon: Clock,
    title: "Contact Within 48 Hours",
    description:
      "Report your issue within 48 hours of receiving the product. Returns requested after this window may not be accepted.",
    color: "#f68b1e",
  },
  {
    step: 2,
    icon: Camera,
    title: "Provide Order ID & Photo",
    description:
      "Share your Order ID from the DADU app and a clear photo of the damaged or incorrect product as proof.",
    color: "#3b82f6",
  },
  {
    step: 3,
    icon: MessageCircle,
    title: "Contact Our Support Team",
    description:
      "Reach out to our support team via email at dadukhelaghor@gmail.com or call +8801782124891 with your details.",
    color: "#8b5cf6",
  },
  {
    step: 4,
    icon: RefreshCcw,
    title: "Return Processed",
    description:
      "After verification, approved returns will be processed. We'll arrange a replacement or refund as appropriate.",
    color: "#10b981",
  },
];

const eligibleReturns = [
  "Damaged product received",
  "Wrong product delivered (different from order)",
  "Product missing parts or accessories",
  "Defective item that cannot be used",
];

const nonEligibleReturns = [
  "Change of mind after purchase",
  "Wrong size ordered (please check sizing before ordering)",
  "Request made after 48-hour window",
  "Product damaged by customer after delivery",
];

export default function ReturnPolicy() {
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
            <span>Return Policy</span>
          </div>
        </div>
      </nav>

      <section className="helpHero">
        <div className="helpHeroInner">
          <div className="helpHeroBadge">
            <RefreshCcw size={16} />
            Return Policy
          </div>
          <h1>Return Policy</h1>
          <p>
            If you received a damaged or incorrect product, we're here to help.
            Contact our support team within 48 hours of delivery to initiate a
            return.
          </p>
        </div>
      </section>

      <section className="helpContent">
        <div className="helpContentInner">

          <div className="returnEligibilityGrid">
            <div className="eligibilityCard eligible">
              <div className="eligibilityHeader">
                <CheckCircle size={22} />
                <h3>Eligible for Return</h3>
              </div>
              <ul>
                {eligibleReturns.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="eligibilityCard notEligible">
              <div className="eligibilityHeader">
                <XCircle size={22} />
                <h3>Not Eligible for Return</h3>
              </div>
              <ul>
                {nonEligibleReturns.map((item, i) => (
                  <li key={i}>
                    <XCircle size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="helpSectionTitle" style={{ marginTop: "48px" }}>How to Request a Return</h2>

          <div className="returnStepsGrid">
            {returnSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article className="returnStepCard" key={step.step}>
                  <div className="returnStepNumber" style={{ background: step.color }}>
                    {step.step}
                  </div>
                  <div className="returnStepIcon" style={{ color: step.color }}>
                    <Icon size={28} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>

          <aside className="helpWarning" style={{ marginTop: "32px" }}>
            <AlertCircle size={20} />
            <div>
              <h3>48-Hour Return Window</h3>
              <p>
                Returns must be reported within 48 hours of delivery. Please inspect your order immediately upon receipt. After the 48-hour window, returns may not be accepted.
              </p>
            </div>
          </aside>

          <aside className="helpTip" style={{ marginTop: "16px" }}>
            <Package size={20} />
            <div>
              <h3>What to Prepare</h3>
              <p>
                Have your <strong>Order ID</strong> (found in the DADU app under "My Orders") and a clear photo of the product ready before contacting support. This speeds up the verification process significantly.
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
              <Link href="/help/delivery-information" className="relatedCard">
                <Package size={20} />
                <span>Delivery Information</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="/help/contact-support" className="relatedCard">
                <MessageCircle size={20} />
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
