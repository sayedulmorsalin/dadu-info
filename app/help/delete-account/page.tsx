import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  UserX,
  User,
  ChevronDown,
  Trash2,
  AlertCircle,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import "../../globals.css";
import "../help.css";

export const metadata: Metadata = {
  title: "Delete Account | Dadu Khelaghor Help Center",
  description:
    "Learn how to delete your DADU app account. Navigate to your profile page and use the Delete Account button to permanently remove your account.",
};

const deleteSteps = [
  {
    step: 1,
    icon: User,
    title: "Navigate to Profile Page",
    description:
      'Open the DADU app and tap on your profile icon or profile picture located in the top corner of the screen. This will take you to your Profile page.',
    visual: "Tap the profile icon/picture at the top of the app",
  },
  {
    step: 2,
    icon: ChevronDown,
    title: "Scroll Down on Profile Page",
    description:
      "Once on your Profile page, scroll down to the bottom of the page. The account management options are located at the bottom.",
    visual: "Scroll to the bottom of your profile page",
  },
  {
    step: 3,
    icon: Trash2,
    title: 'Find the "Delete Account" Button',
    description:
      'Look for the red "Delete Account" button at the bottom of your profile page. Tap on it to begin the account deletion process.',
    visual: 'Tap the red "Delete Account" button',
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Confirm Deletion",
    description:
      "A confirmation dialog will appear. Read the warning carefully, then confirm your decision to permanently delete your account.",
    visual: "Confirm account deletion in the dialog",
  },
];

export default function DeleteAccount() {
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
            <span>Delete Account</span>
          </div>
        </div>
      </nav>

      <section className="helpHero deleteHero">
        <div className="helpHeroInner">
          <div className="helpHeroBadge" style={{ background: "rgba(239, 68, 68, 0.12)", color: "#ef4444" }}>
            <UserX size={16} />
            Account Management
          </div>
          <h1>Delete Your Account</h1>
          <p>
            Welcome to Dadu Help Center. If you want to delete your account
            from DADU, it's very easy. Follow the steps below to permanently
            delete your account.
          </p>
        </div>
      </section>

      <section className="helpContent">
        <div className="helpContentInner">

          <aside className="helpWarning" style={{ marginBottom: "40px" }}>
            <AlertCircle size={20} />
            <div>
              <h3>⚠️ This Action is Permanent</h3>
              <p>
                Deleting your account is <strong>irreversible</strong>. All your order history, saved addresses, and personal data will be permanently removed. Make sure you have resolved any pending orders before proceeding.
              </p>
            </div>
          </aside>

          <h2 className="helpSectionTitle">Steps to Delete Your Account</h2>

          <div className="deleteStepsContainer">
            {deleteSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="deleteStepCard" key={step.step}>
                  <div className="deleteStepLeft">
                    <div className="deleteStepBadge">
                      <Icon size={20} />
                    </div>
                    {index < deleteSteps.length - 1 && <div className="deleteStepLine" />}
                  </div>
                  <div className="deleteStepRight">
                    <div className="deleteStepNumber">Step {step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="deleteStepVisual">
                      <ChevronRight size={14} />
                      {step.visual}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="helpTip" style={{ marginTop: "32px" }}>
            <MessageCircle size={20} />
            <div>
              <h3>Need Help Instead?</h3>
              <p>
                If you're having issues with your account rather than wanting to delete it, our support team can help. Contact us at{" "}
                <a href="mailto:dadukhelaghor@gmail.com" style={{ color: "var(--accent)", fontWeight: 700 }}>
                  dadukhelaghor@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:+8801782124891" style={{ color: "var(--accent)", fontWeight: 700 }}>
                  +8801782124891
                </a>.
              </p>
            </div>
          </aside>

          <div className="helpRelated">
            <h3>Related Help Articles</h3>
            <div className="relatedGrid">
              <Link href="/help/contact-support" className="relatedCard">
                <MessageCircle size={20} />
                <span>Contact Support</span>
                <ChevronRight size={16} />
              </Link>
              <Link href="/help/how-to-place-order" className="relatedCard">
                <CheckCircle size={20} />
                <span>How to Place Order</span>
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
