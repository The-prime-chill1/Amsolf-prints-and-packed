import { useEffect } from "react";
import {
  PiPhoneBold,
  PiWhatsappLogoBold,
  PiEnvelopeSimpleBold,
  PiMapPinBold,
  PiClockBold,
  PiGlobeBold,
  PiInstagramLogoBold,
  PiFacebookLogoBold,
  PiTiktokLogoBold,
} from "react-icons/pi";
import PageHero from "../components/PageHero";
import ContactCard from "../components/ContactCard";
import QuoteForm from "../components/QuoteForm";
import SectionTitle from "../components/SectionTitle";
import { site } from "../data/siteConfig";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    if (window.location.hash === "#quote") {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project"
        description="Reach us directly or send a quote request below — based in Ibadan, Nigeria, with reliable delivery worldwide."
      />

      <section className="section contact-info">
        <div className="shell contact-info__grid">
          <ContactCard icon={<PiPhoneBold />} label="Phone" value={site.phone} href={site.phoneHref} />
          {site.phone2 && (
            <ContactCard icon={<PiPhoneBold />} label="Alternate Phone" value={site.phone2} href={site.phone2Href} />
          )}
          <ContactCard icon={<PiWhatsappLogoBold />} label="WhatsApp" value={site.whatsappNumber} href={site.whatsappHref} />
          <ContactCard icon={<PiEnvelopeSimpleBold />} label="Email" value={site.email} href={site.emailHref} />
          <ContactCard icon={<PiMapPinBold />} label="Address" value={site.address} />
          <ContactCard icon={<PiGlobeBold />} label="Delivery & Shipping" value={site.delivery} />
          <ContactCard icon={<PiClockBold />} label="Business Hours" value={site.businessHours} />
        </div>

        <div className="shell contact-info__social">
          <span>Follow us:</span>
          <div>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><PiInstagramLogoBold /></a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><PiFacebookLogoBold /></a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><PiTiktokLogoBold /></a>
          </div>
        </div>
      </section>

      <section className="section contact-quote">
        <div className="shell">
          <SectionTitle
            eyebrow="Request a Quote"
            title="Tell us about your project"
            description="Fill in as much detail as you can — we'll open WhatsApp with everything pre-filled so you can send it straight to us."
          />
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
