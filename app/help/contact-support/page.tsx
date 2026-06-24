import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  MessageCircle,
  Mail,
  Phone,
  User,
  Package,
  RefreshCcw,
  Clock,
  CheckCircle,
} from "lucide-react";
import "../../globals.css";
import "../help.css";

export const metadata: Metadata = {
  title: "Contact Support | Dadu Khelaghor Help Center",
  description:
    "Contact Dadu Khelaghor support. Email: dadukhelaghor@gmail.com. Phone: +8801782124891. Developer: Md. Sayedul Morsalin.",
};

const contactChannels = [
  {
    icon: Mail,
    title: "Email Support",
    value: "dadukhelaghor@gmail.com",
    href: "mailto:dadukhelaghor@gmail.com",
    description: "For order inquiries, returns, and general questions. We respond within 24 hours.",
    responseTime: "Within 24 hours",
    color: "#f68b1e",
    bgColor: "rgba(246, 139, 30, 0.08)",
  },
  {
    icon: Phone,
    title: "Phone Support",
    value: "+8801782124891",
    href: "tel:+8801782124891",
    description: "Call us directly for urgent order issues, payment problems, or delivery concerns.",
    responseTime: "Immediate",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.08)",
  },
];

const faqItems = [
  {
    question: "How long does it take to get a response?",
    answer: "We typically respond to emails within 24 hours. Phone support is available during business hours for immediate assistance.",
  },
  {
    question: "What information should I include when contacting support?",
    answer: "Please include your Order ID, registered phone number, a description of the issue, and any relevant photos (for return/damage claims).",
  },
  {
    question: "Can I track my order through support?",
    answer: "Yes, our support team can help you track your order. Have your Order ID ready when you contact us.",
  },
  {
    question: "Who is the developer of the DADU app?",
    answer: "The DADU app was developed by Md. Sayedul Morsalin. For technical issues with the app, you can also reach the developer at sayadulmorsalin123@gmail.com.",
  },
];

export default function ContactSupport() {
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
            <span>Contact Support</span>
          </div>
        </div>
      </nav>

      <section className="helpHero">
        <div className="helpHeroInner">
          <div className="helpHeroBadge">
            <MessageCircle size={16} />
            Support
          </div>
          <h1>Contact Support</h1>
          <p>
            Our support team is ready to help you with any questions or issues.
            Reach out via email or phone and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="helpContent">
        <div className="helpContentInner">

          <h2 className="helpSectionTitle">Get in Touch</h2>

          <div className="contactChannelsGrid">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  href={channel.href}
                  className="contactChannelCard"
                  key={channel.title}
                  style={{ "--channel-color": channel.color, "--channel-bg": channel.bgColor } as React.CSSProperties}
                >
                  <div className="contactChannelIcon" style={{ background: channel.bgColor, color: channel.color }}>
                    <Icon size={28} />
                  </div>
                  <div className="contactChannelBody">
                    <h3>{channel.title}</h3>
                    <div className="contactChannelValue" style={{ color: channel.color }}>
                      {channel.value}
                    </div>
                    <p>{channel.description}</p>
                    <div className="contactResponseTime">
                      <Clock size={13} />
                      Response time: {channel.responseTime}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="developerCard">
            <div className="developerIcon">
              <User size={32} />
            </div>
            <div className="developerInfo">
              <div className="developerBadge">App Developer</div>
              <h3>Md. Sayedul Morsalin</h3>
              <p>Developer of the DADU Khelaghor App</p>
              <a href="mailto:sayadulmorsalin123@gmail.com" className="developerEmail">
                <Mail size={14} />
                sayadulmorsalin123@gmail.com
              </a>
            </div>
          </div>

          <h2 className="helpSectionTitle" style={{ marginTop: "48px" }}>Frequently Asked Questions</h2>

          <div className="faqList">
            {faqItems.map((faq, i) => (
              <div className="faqItem" key={i}>
                <div className="faqQuestion">
                  <CheckCircle size={18} />
                  <h3>{faq.question}</h3>
                </div>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <aside className="helpTip" style={{ marginTop: "32px" }}>
            <MessageCircle size={20} />
            <div>
              <h3>Before Contacting Support</h3>
              <p>
                Check our other help articles first — you might find a quick answer! If you still need help, we're always here for you.
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
                <RefreshCcw size={20} />
                <span>Return Policy</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="/help/delete-account" className="relatedCard">
                <User size={20} />
                <span>Delete Account</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
