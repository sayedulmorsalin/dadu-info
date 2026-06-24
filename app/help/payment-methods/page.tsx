import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CreditCard,
  ChevronRight,
  Smartphone,
  CheckCircle,
  Upload,
  ShieldCheck,
  Package,
  AlertCircle,
} from "lucide-react";
import "../../globals.css";
import "../help.css";

export const metadata: Metadata = {
  title: "Payment Methods | Dadu Khelaghor Help Center",
  description:
    "Learn about accepted payment methods at Dadu Khelaghor. We support Mobile Banking via Bkash, Nagad, and Rocket. Upload your payment proof during checkout.",
};

const paymentMethods = [
  {
    name: "Bkash",
    color: "#E2136E",
    bgColor: "rgba(226, 19, 110, 0.08)",
    description:
      "Bangladesh's most popular mobile banking platform. Fast and secure transactions.",
    steps: [
      'Open Bkash app and tap "Send Money"',
      "Enter the merchant number provided at checkout",
      "Enter the exact order amount",
      "Complete the transaction and note the Transaction ID",
      "Upload the payment screenshot in the DADU app",
    ],
  },
  {
    name: "Nagad",
    color: "#F47920",
    bgColor: "rgba(244, 121, 32, 0.08)",
    description:
      "Digital financial service by Bangladesh Post Office. Quick and reliable.",
    steps: [
      'Open Nagad app and select "Send Money"',
      "Enter the merchant number provided at checkout",
      "Enter the exact payment amount",
      "Confirm the transaction and save the reference number",
      "Upload proof in the DADU app checkout page",
    ],
  },
  {
    name: "Rocket",
    color: "#8B2FC9",
    bgColor: "rgba(139, 47, 201, 0.08)",
    description:
      "Dutch-Bangla Bank's mobile banking service. Widely available across Bangladesh.",
    steps: [
      'Open Rocket (DBBL Mobile Banking) app',
      'Select "Send Money" option',
      "Enter the merchant account number",
      "Enter order amount and confirm with PIN",
      "Screenshot the confirmation and upload in the app",
    ],
  },
];

export default function PaymentMethods() {
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
            <span>Payment Methods</span>
          </div>
        </div>
      </nav>

      <section className="helpHero">
        <div className="helpHeroInner">
          <div className="helpHeroBadge">
            <CreditCard size={16} />
            Payment Guide
          </div>
          <h1>Payment Methods</h1>
          <p>
            DADU currently supports Mobile Banking for all orders. Choose from
            Bkash, Nagad, or Rocket and follow the simple steps below.
          </p>
        </div>
      </section>

      <section className="helpContent">
        <div className="helpContentInner">

          <div className="paymentOverview">
            <div className="paymentOverviewCard">
              <Smartphone size={24} />
              <div>
                <h3>Mobile Banking Only</h3>
                <p>Currently, DADU supports payment via Mobile Banking platforms only — Bkash, Nagad, and Rocket.</p>
              </div>
            </div>
            <div className="paymentOverviewCard">
              <Upload size={24} />
              <div>
                <h3>Upload Payment Proof</h3>
                <p>After payment, upload your transaction screenshot or Transaction ID during checkout in the app.</p>
              </div>
            </div>
            <div className="paymentOverviewCard">
              <ShieldCheck size={24} />
              <div>
                <h3>Order Verified Before Shipping</h3>
                <p>All orders are verified by our team before being shipped to ensure accuracy and security.</p>
              </div>
            </div>
          </div>

          <h2 className="helpSectionTitle">Supported Payment Methods</h2>

          <div className="paymentMethodsGrid">
            {paymentMethods.map((method) => (
              <article
                className="paymentMethodCard"
                key={method.name}
                style={{ "--method-color": method.color, "--method-bg": method.bgColor } as React.CSSProperties}
              >
                <div className="paymentMethodHeader">
                  <div className="paymentMethodBadge" style={{ background: method.bgColor, color: method.color }}>
                    {method.name}
                  </div>
                  <p>{method.description}</p>
                </div>
                <div className="paymentMethodSteps">
                  <h4>How to pay with {method.name}:</h4>
                  <ol>
                    {method.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>

          <aside className="helpWarning">
            <AlertCircle size={20} />
            <div>
              <h3>Important Note</h3>
              <p>
                Always double-check the merchant number before sending payment. DADU will never ask for your PIN or password. If you face any issues with payment, contact our support team immediately.
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
