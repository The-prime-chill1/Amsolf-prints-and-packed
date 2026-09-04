import { useState } from "react";
import { motion } from "framer-motion";
import {
  PiArrowRightBold,
  PiCheckCircleBold,
  PiSealCheckDuotone,
  PiPaintBrushDuotone,
  PiTruckDuotone,
  PiMagnifyingGlassDuotone,
  PiStackDuotone,
  PiTimerDuotone,
} from "react-icons/pi";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import Modal from "../components/Modal";
import RegisterMark from "../components/RegisterMark";
import CmykDots from "../components/CmykDots";
import { site } from "../data/siteConfig";
import { services, portfolioItems } from "../data/services";
import "./Home.css";

const WHY = [
  { icon: PiSealCheckDuotone, title: "Quality First", desc: "Professional materials and careful finishing on every job." },
  { icon: PiPaintBrushDuotone, title: "Professional Design", desc: "Creative and modern designs tailored to your needs." },
  { icon: PiTruckDuotone, title: "Reliable Service", desc: "We handle every project with care and professionalism." },
  { icon: PiMagnifyingGlassDuotone, title: "Attention to Detail", desc: "Every print gets careful attention from design to finishing." },
  { icon: PiStackDuotone, title: "Bulk Printing", desc: "Suited to businesses, schools, organizations and large projects." },
  { icon: PiTimerDuotone, title: "Fast Turnaround", desc: "Efficient production without cutting corners on quality." },
];

export default function Home() {
  const [modalItem, setModalItem] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="shell hero__inner">
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="hero__pill">
              <span className="hero__dot" />
              <span>Professional Printing &amp; Design — Ibadan</span>
            </div>

            <h1>
              Precision Printing. <br />
              <em>Bold Design.</em> <br />
              Delivered with Quality.
            </h1>

            <p>
              From business cards and flyers to book publishing, large-format billboards, branded packaging and calendars — <strong>Amsolf Prints and Packed</strong> brings your vision to life with quality craftsmanship on every job.
            </p>

            <div className="hero__actions">
              <Button to="/contact#quote" variant="onDark" icon={<PiArrowRightBold />}>
                Request a Free Quote
              </Button>
              <Button to="/services" variant="secondary" className="hero__secondaryBtn">
                Explore Services
              </Button>
            </div>

            <div className="hero__trust">
              <span className="hero__trust-item">
                <span className="hero__trust-check">✓</span> Modern Offset &amp; Digital
              </span>
              <span className="hero__trust-item">
                <span className="hero__trust-check">✓</span> Books, Billboards &amp; Calendars
              </span>
              <span className="hero__trust-item">
                <span className="hero__trust-check">✓</span> Dependable Fast Delivery
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero__showcase"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.15 }}
          >
            <div className="hero__card-frame">
              {/* Media preview */}
              <div className="hero__card-media">
                <img
                  src="/images/notebooks.jpg"
                  alt="Custom notebooks and publications by Amsolf Prints"
                  className="hero__card-img"
                />
                <div className="hero__card-overlay" />
                <div className="hero__badge-floating">
                  <div className="hero__badge-orb">
                    <img src="/logo.jpg" alt="Amsolf Prints and Packed" />
                  </div>
                  <div className="hero__badge-meta">
                    <strong>Amsolf Prints and Packed</strong>
                    <span>Printing Ideas. Designed with Precision.</span>
                  </div>
                </div>
              </div>

              {/* Card details */}
              <div className="hero__card-body">
                <div className="hero__card-pills">
                  <span className="hero__card-pill">Custom Notebooks</span>
                  <span className="hero__card-pill">General Printing</span>
                  <span className="hero__card-pill">Billboards</span>
                  <span className="hero__card-pill">Packaging</span>
                </div>
                <div className="hero__card-footer">
                  <div className="hero__card-founder">
                    <span className="hero__card-lead">Led by {site.founderTitle}</span>
                    <span className="hero__card-name">{site.founder}</span>
                  </div>
                  <div className="hero__card-hours">
                    <span className="hero__card-lead">Business Hours</span>
                    <span className="hero__card-hours-text">{site.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST / INTRO */}
      <section className="section intro">
        <div className="shell intro__inner">
          <SectionTitle
            eyebrow="Who We Are"
            title={`An established name in printing and publishing`}
            description={`${site.companyName} delivers professional graphic design, Qur'an and book printing, branding, and large-format printing for individuals, businesses, schools, organizations and institutions in ${site.location}.`}
          />
          {site.stats.length > 0 && (
            <div className="intro__stats">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section services-preview">
        <div className="shell">
          <SectionTitle
            eyebrow="What We Do"
            title="Printing, design and branding, done with precision"
            description="General printing, book work, billboards, calendars and more — delivered with care and precision for businesses, schools, organizations and individuals."
          />
          <div className="services-preview__grid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} onLearnMore={() => (window.location.href = "/services")} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED: QURAN */}
      <section className="featured">
        <div className="shell featured__inner">
          <motion.div
            className="featured__visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="featured__frame">
              <img src="/images/quran.jpg" alt="Qur'an & Book Printing" className="featured__img" />
            </div>
          </motion.div>
          <motion.div
            className="featured__copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <span className="eyebrow eyebrow--onDark">Featured Service</span>
            <h2>Qur'an &amp; Islamic Book Printing</h2>
            <p>
              A dedicated craft within our printing house — premium paper, professional binding
              and typesetting for Qur'ans and Islamic publications, produced with the care the
              text deserves.
            </p>
            <ul className="featured__list">
              {["Premium printing", "Professional binding", "Quality paper", "Custom cover options", "Bulk orders", "Typesetting"].map((f) => (
                <li key={f}><PiCheckCircleBold /> {f}</li>
              ))}
            </ul>
            <Button to="/quran-book-printing" variant="onDark" icon={<PiArrowRightBold />}>
              Explore Qur'an &amp; Book Printing
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why">
        <div className="shell">
          <SectionTitle eyebrow="Why Choose Us" title={`Why choose ${site.shortName}?`} align="center" />
          <div className="why__grid">
            {WHY.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="why__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="why__icon-wrap"><Icon /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section portfolio-preview">
        <div className="shell">
          <SectionTitle
            eyebrow="Our Recent Work"
            title="A look at what leaves our press"
            description="A selection of design and print work — replace these slots with real project photography."
          />
          <div className="portfolio-preview__grid">
            {portfolioItems.slice(0, 8).map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} onOpen={setModalItem} />
            ))}
          </div>
          <div className="portfolio-preview__more">
            <Button to="/portfolio" variant="secondary" icon={<PiArrowRightBold />}>
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>
      <Modal item={modalItem} onClose={() => setModalItem(null)} />

      {/* CTA BANNER */}
      <section className="cta-band">
        <div className="shell cta-band__inner">
          <div>
            <span className="eyebrow eyebrow--onDark">Ready to Start?</span>
            <h2>Tell us what you're printing — we'll handle the rest.</h2>
          </div>
          <div className="cta-band__actions">
            <Button to="/contact#quote" variant="onDark" icon={<PiArrowRightBold />}>
              Request a Quote
            </Button>
            <Button href={site.whatsappHref} variant="secondary" className="cta-band__wa">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
