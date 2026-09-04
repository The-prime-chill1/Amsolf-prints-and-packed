import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { site } from "../data/siteConfig";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Privacy"
        title="Privacy & Policy"
        description={`Your trust is paramount. Learn how ${site.companyName} handles your artwork, personal information, and global orders with utmost confidentiality.`}
      />

      <section className="section privacy-content">
        <div className="shell privacy-content__inner">
          <motion.div
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="privacy-section">
              <h2>1. Confidentiality of Client Artwork &amp; Manuscripts</h2>
              <p>
                At <strong>{site.companyName}</strong>, we treat all design files, publication drafts, Qur'an manuscripts, book contents, and custom packaging designs with absolute confidentiality. 
                Any files uploaded or provided for quotation, proofing, or printing remain your sole intellectual property. We do not share, sell, or distribute your artwork to third parties.
              </p>
            </div>

            <div className="privacy-section">
              <h2>2. Information We Collect</h2>
              <p>When requesting a quote, placing an order, or contacting us via WhatsApp or email, we collect the following essential information:</p>
              <ul>
                <li><strong>Contact Details:</strong> Your name, phone number, email address, and organization/company name.</li>
                <li><strong>Order Specifications:</strong> Print quantity, paper stock, finishing choices, and custom dimensions.</li>
                <li><strong>Delivery Address:</strong> Shipping location for nationwide (Nigeria) or worldwide delivery.</li>
                <li><strong>Artwork Files:</strong> PDF, AI, PSD, or image files uploaded for production.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>Information gathered is strictly utilized to deliver precision printing and customer satisfaction:</p>
              <ul>
                <li>To generate accurate price quotes and technical press estimates.</li>
                <li>To process, print, inspect, package, and dispatch your orders.</li>
                <li>To coordinate logistics with reliable domestic and international courier partners.</li>
                <li>To communicate order status updates and press proofs directly via WhatsApp or email.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Nationwide &amp; International Shipping Policy</h2>
              <p>
                Although headquartered at <em>{site.address}</em>, we serve clients across all 36 states in Nigeria and deliver internationally to clients worldwide.
              </p>
              <ul>
                <li><strong>Local &amp; Regional Deliveries:</strong> Dispatched via verified logistics partners across Ibadan, Lagos, and surrounding states.</li>
                <li><strong>Nationwide Shipping:</strong> Handled by reputable interstate transport and courier networks with tracking updates.</li>
                <li><strong>Worldwide Delivery:</strong> Shipped via international air and express freight couriers (e.g., DHL, FedEx, Cargo). Recipients are responsible for any destination country import duties or customs clearance requirements.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>5. Data Protection &amp; Security</h2>
              <p>
                We enforce administrative, technical, and physical safeguards to prevent unauthorized access, loss, or disclosure of client files and contact information. Storage of physical proofs and digital prepress archives is restricted to authorized press personnel only.
              </p>
            </div>

            <div className="privacy-section">
              <h2>6. Contact &amp; Enquiries</h2>
              <p>If you have any questions regarding our privacy practices or order handling, please reach out to us:</p>
              <div className="privacy-contact-box">
                <p><strong>{site.companyName}</strong></p>
                <p>{site.address}</p>
                <p>Phone / WhatsApp: <a href={site.whatsappHref}>{site.phone}</a></p>
                <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
