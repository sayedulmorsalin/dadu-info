import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  CheckCircle,
  Smartphone,
  Search,
  Package,
  MapPin,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import "../../globals.css";
import "../help.css";

export const metadata: Metadata = {
  title: "How to Place Order | Dadu Khelaghor Help Center",
  description:
    "Step-by-step guide on how to place an order on the DADU app. Browse products, add to cart, confirm delivery address, and upload payment proof.",
};

const steps = [
  {
    number: 1,
    icon: Smartphone,
    title: "Open the DADU App",
    description:
      "Download and open the DADU app on your smartphone. Make sure you are logged in to your account before proceeding.",
  },
  {
    number: 2,
    icon: Search,
    title: "Browse Products",
    description:
      "Explore our wide range of football boots, goalkeeper gloves, and sports combo kits from the home page. Use the search bar to find specific items.",
  },
  {
    number: 3,
    icon: Package,
    title: "Select Your Product",
    description:
      "Tap on any product to view details including size, price, and availability. Check the product images and description carefully.",
  },
  {
    number: 4,
    icon: ShoppingCart,
    title: 'Tap "Buy Now" or "Add to Cart"',
    description:
      'To order immediately, tap "Buy Now". To collect multiple items first, use "Add to Cart" and checkout when ready.',
  },
  {
    number: 5,
    icon: MapPin,
    title: "Confirm Delivery Address",
    description:
      "Enter or confirm your delivery address. Make sure all details are accurate — including district, upazila, and house/road number — to ensure smooth delivery.",
  },
  {
    number: 6,
    icon: CreditCard,
    title: "Upload Payment Proof",
    description:
      "Complete your payment via Bkash, Nagad, or Rocket and upload the payment screenshot or transaction ID. Your order will be verified and processed for shipping.",
  },
];

export default function HowToPlaceOrder() {
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
            <span>How to Place Order</span>
          </div>
        </div>
      </nav>

      <section className="helpHero">
        <div className="helpHeroInner">
          <div className="helpHeroBadge">
            <ShoppingCart size={16} />
            Order Guide
          </div>
          <h1>How to Place an Order</h1>
          <p>
            Follow these simple steps to place your order on the DADU app and
            get your sports gear delivered right to your door.
          </p>
        </div>
      </section>

      <section className="helpContent">
        <div className="helpContentInner">
          <div className="stepsContainer">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="stepCard" key={step.number}>
                  <div className="stepNumber">
                    <span>{step.number}</span>
                    {index < steps.length - 1 && (
                      <div className="stepConnector" />
                    )}
                  </div>
                  <div className="stepBody">
                    <div className="stepIcon">
                      <Icon size={22} />
                    </div>
                    <div className="stepContent">
                      <h2>{step.title}</h2>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="helpTip">
            <CheckCircle size={20} />
            <div>
              <h3>Pro Tip</h3>
              <p>
                Always verify your order details before confirming. Double-check
                the size, quantity, and delivery address to avoid any issues
                with your order.
              </p>
            </div>
          </aside>

          <div className="helpRelated">
            <h3>Related Help Articles</h3>
            <div className="relatedGrid">
              <Link href="/help/payment-methods" className="relatedCard">
                <CreditCard size={20} />
                <span>Payment Methods</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="/help/delivery-information" className="relatedCard">
                <Package size={20} />
                <span>Delivery Information</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="/help/return-policy" className="relatedCard">
                <ArrowLeft size={20} />
                <span>Return Policy</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
