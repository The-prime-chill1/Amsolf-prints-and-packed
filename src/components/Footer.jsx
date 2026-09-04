import { Link } from "react-router-dom";
import {
  PiInstagramLogoBold,
  PiFacebookLogoBold,
  PiTiktokLogoBold,
  PiWhatsappLogoBold,
  PiPhoneBold,
  PiEnvelopeSimpleBold,
  PiMapPinBold,
} from "react-icons/pi";
import RegisterMark from "./RegisterMark";
import { site } from "../data/siteConfig";
import { services } from "../data/services";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            {site.logo ? (
              <img src={site.logo} alt={site.companyName} className="footer__logo-img" />
            ) : (
              <RegisterMark className="footer__mark" />
            )}
            <span>{site.shortName}</span>
          </Link>
          <p>{site.tagline}</p>
          <p className="footer__desc">
            Professional graphic design, Qur'an &amp; book printing, packaging, branding and large-format
            printing based in Ibadan, Nigeria — delivering nationwide &amp; worldwide.
          </p>
          <div className="footer__social">
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <PiInstagramLogoBold />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <PiFacebookLogoBold />
            </a>
            <a href={site.social.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <PiTiktokLogoBold />
            </a>
            <a href={site.whatsappHref} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <PiWhatsappLogoBold />
            </a>
          </div>
        </div>

        <div className="footer__links-row">
          <div className="footer__col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/gallery">Equipment Gallery</Link></li>
              <li><Link to="/quran-book-printing">Qur'an &amp; Book Printing</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy &amp; Policy</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Services</h3>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}><Link to="/services">{s.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li><PiPhoneBold /><a href={site.phoneHref}>{site.phone}</a></li>
            {site.phone2 && (
              <li><PiPhoneBold /><a href={site.phone2Href}>{site.phone2}</a></li>
            )}
            <li><PiEnvelopeSimpleBold /><a href={site.emailHref}>{site.email}</a></li>
            <li><PiMapPinBold /><span>{site.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="shell footer__bottom">
        <p>© {year} {site.companyName}. All Rights Reserved. • <Link to="/privacy">Privacy &amp; Policy</Link></p>
        <p className="footer__built-by">
          Powered and built by{" "}
          <a
            href="https://chilltechltd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            chilltechltd.com
          </a>
        </p>
        <p className="footer__hours">{site.businessHours}</p>
      </div>
    </footer>
  );
}
