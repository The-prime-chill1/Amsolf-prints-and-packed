import { motion } from "framer-motion";
import {
  PiShieldCheckDuotone,
  PiFileTextDuotone,
  PiCheckCircleBold,
  PiTruckDuotone,
  PiLockKeyDuotone,
  PiSealCheckDuotone,
  PiPhoneBold,
  PiEnvelopeSimpleBold,
  PiMapPinBold,
  PiWhatsappLogoBold,
} from "react-icons/pi";
import PageHero from "../components/PageHero";
import { site } from "../data/siteConfig";
import "./PrivacyPolicy.css";

const POLICIES = [
  {
    id: "confidentiality",
    number: "01",
    icon: PiLockKeyDuotone,
    title: "Confidentiality of Client Artwork & Manuscripts",
    summary: "Your intellectual property is 100% protected and secure.",
    content: (
      <>
        <p>
          At <strong>{site.companyName}</strong>, we treat all design files, publication drafts, holy Qur'an manuscripts, book contents, and custom packaging designs with absolute confidentiality.
        </p>
        <p>
          Any files submitted for quotation, proofing, or press production remain your sole intellectual property. We will never share, sell, distribute, or license your artwork to any third party.
        </p>
      </>
    ),
  },
  {
    id: "proofing",
    number: "02",
    icon: PiSealCheckDuotone,
    title: "Prepress Proofing & Approval Policy",
    summary: "Strict proof verification to guarantee zero printing surprises.",
    content: (
      <>
        <p>
          To guarantee color accuracy, typography precision, and exact trim dimensions, we enforce a strict proofing workflow prior to mass press runs:
        </p>
        <ul className="policy-checklist">
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Digital Soft Proofs:</strong> High-resolution digital PDF soft proofs are sent via WhatsApp or Email for client review and sign-off.
            </div>
          </li>
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Physical Press Proofs:</strong> Available upon request for large book runs, hardcover Qur'an publications, or custom packaging jobs.
            </div>
          </li>
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Client Sign-off:</strong> Mass offset printing begins only after explicit client approval of the digital or physical press proof.
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-collection",
    number: "03",
    icon: PiFileTextDuotone,
    title: "Information We Collect & Use",
    summary: "Only the essential details required to produce and deliver your job.",
    content: (
      <>
        <p>When requesting a quote, submitting artwork, or placing an order, we collect essential production data:</p>
        <ul className="policy-checklist">
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Contact Details:</strong> Full name, phone number, WhatsApp contact, email address, and organization/company name.
            </div>
          </li>
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Order Specifications:</strong> Quantity, paper grammage (GSM), lamination type, binding style, and custom box dimensions.
            </div>
          </li>
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Shipping &amp; Delivery Destination:</strong> Street address and postal details for domestic (Nigeria) or international freight delivery.
            </div>
          </li>
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Prepress Artwork Files:</strong> PDF, AI, PSD, or image files uploaded for production.
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "shipping",
    number: "04",
    icon: PiTruckDuotone,
    title: "Nationwide & International Shipping Policy",
    summary: "Headquartered in Ibadan with reliable delivery across Nigeria and worldwide.",
    content: (
      <>
        <p>
          Although headquartered at <em>{site.address}</em>, we serve clients across all 36 states in Nigeria and deliver internationally to clients worldwide.
        </p>
        <div className="shipping-grid">
          <div className="shipping-card">
            <h4>Local &amp; Regional (Ibadan / Lagos)</h4>
            <p>Dispatched via verified logistics partners and dedicated press couriers with same-day or next-day delivery options.</p>
          </div>
          <div className="shipping-card">
            <h4>Nationwide Shipping (All 36 States)</h4>
            <p>Handled by reputable interstate logistics networks with tracking updates and secure protective packaging.</p>
          </div>
          <div className="shipping-card">
            <h4>Worldwide Delivery (International)</h4>
            <p>Shipped via international air express (DHL, FedEx, Air Cargo). Recipients are responsible for any destination country customs clearance requirements.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "quality",
    number: "05",
    icon: PiShieldCheckDuotone,
    title: "Quality Assurance & Replacement Policy",
    summary: "We stand behind the craftsmanship of every finished printed piece.",
    content: (
      <>
        <p>
          We take immense pride in our print precision. In the rare event of a manufacturing defect attributable to our press run (e.g., binding defect, misregistration, or wrong paper stock):
        </p>
        <ul className="policy-checklist">
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>7-Day Reporting Window:</strong> Defect claims must be reported within 7 business days of delivery receipt along with photo or video evidence.
            </div>
          </li>
          <li>
            <PiCheckCircleBold />
            <div>
              <strong>Free Reprint Guarantee:</strong> Verified press defects will be promptly reprinted and replaced at no extra cost to the client.
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    number: "06",
    icon: PiLockKeyDuotone,
    title: "Data Security & File Retention",
    summary: "Secure digital archiving for re-orders, with full deletion on request.",
    content: (
      <>
        <p>
          We enforce administrative, technical, and physical safeguards to protect client files and contact details. Digital prepress archives are stored securely for re-order purposes and can be permanently deleted upon client request.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Production Standards"
        title="Privacy & Production Policy"
        description={`Your trust is paramount. Learn how ${site.companyName} safeguards your artwork, manages proofing, ensures quality, and coordinates global deliveries.`}
      />

      <section className="section privacy-page">
        <div className="shell privacy-page__inner">
          {/* INTRO SUMMARY BANNER */}
          <div className="privacy-summary-banner">
            <PiShieldCheckDuotone className="privacy-summary-icon" />
            <div>
              <h3>Our Commitment to Confidentiality &amp; Precision</h3>
              <p>
                From published manuscripts and holy Qur'ans to proprietary packaging blanks, your files and order specifications are handled with strict confidentiality, precision prepress inspection, and dependable delivery.
              </p>
            </div>
          </div>

          {/* POLICY SECTIONS */}
          <div className="policy-cards-list">
            {POLICIES.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <motion.article
                  key={policy.id}
                  id={policy.id}
                  className="policy-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="policy-block__header">
                    <span className="policy-block__num">{policy.number}</span>
                    <div className="policy-block__title-area">
                      <h2>{policy.title}</h2>
                      <span className="policy-block__summary">{policy.summary}</span>
                    </div>
                  </div>

                  <div className="policy-block__body">{policy.content}</div>
                </motion.article>
              );
            })}
          </div>

          {/* CONTACT & ENQUIRIES BOX */}
          <div className="privacy-contact-card">
            <div className="privacy-contact-card__info">
              <span className="eyebrow">Direct Assistance</span>
              <h3>Questions about our terms or active press orders?</h3>
              <p>Our management and prepress team are readily available to assist you.</p>

              <div className="privacy-contact-meta">
                <div>
                  <PiMapPinBold />
                  <span>{site.address}</span>
                </div>
                <div>
                  <PiPhoneBold />
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
                <div>
                  <PiEnvelopeSimpleBold />
                  <a href={site.emailHref}>{site.email}</a>
                </div>
              </div>
            </div>

            <div className="privacy-contact-card__action">
              <a href={site.whatsappHref} className="privacy-wa-btn" target="_blank" rel="noopener noreferrer">
                <PiWhatsappLogoBold />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
