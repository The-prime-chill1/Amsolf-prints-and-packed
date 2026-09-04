import { motion } from "framer-motion";
import { PiArrowRightBold, PiCheckBold } from "react-icons/pi";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../data/services";
import { site } from "../data/siteConfig";
import "./Services.css";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A complete printing & design service directory"
        description="Every service we offer, organized by category — from first sketch to finished, bound and delivered print across Nigeria and worldwide."
      />

      <section className="section services-directory">
        <div className="shell">
          <div className="services-directory__grid">
            {services.map((s, i) => (
              <motion.article
                key={s.slug}
                id={s.slug}
                className="services-directory__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="services-directory__head">
                  <ServiceIcon name={s.icon} />
                  <h2>{s.title}</h2>
                </div>
                <p>{s.short}</p>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}><PiCheckBold /> {it}</li>
                  ))}
                </ul>
                <Button to="/contact#quote" variant="ghost" icon={<PiArrowRightBold />}>
                  Request a Quote
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="shell services-cta__inner">
          <div>
            <span className="eyebrow eyebrow--onDark">Not sure what you need?</span>
            <h2>Tell us about your project and we'll recommend the right service.</h2>
          </div>
          <Button href={site.whatsappHref} variant="onDark">Chat on WhatsApp</Button>
        </div>
      </section>
    </>
  );
}
