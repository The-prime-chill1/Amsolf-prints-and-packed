import { PiWhatsappLogoBold } from "react-icons/pi";
import { site } from "../data/siteConfig";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      className="wa-fab"
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.shortName} on WhatsApp`}
    >
      <PiWhatsappLogoBold />
    </a>
  );
}
