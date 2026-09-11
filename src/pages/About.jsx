import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PiTargetDuotone,
  PiEyeDuotone,
  PiHandHeartDuotone,
  PiSealCheckDuotone,
  PiDesktopDuotone,
  PiArrowRightBold,
  PiLaptopDuotone,
  PiFileTextDuotone
} from "react-icons/pi";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { site } from "../data/siteConfig";
import "./About.css";

const VALUES = [
  { icon: PiTargetDuotone, title: "Our Mission", body: "To deliver uncompromising print, packaging, and digital typesetting excellence, empowering authors, enterprises, and institutions worldwide." },
  { icon: PiEyeDuotone, title: "Our Vision", body: "To be the premier printing and technology conglomerate in Nigeria and West Africa, renowned for precision, reliability, and innovation." },
  { icon: PiHandHeartDuotone, title: "Our Values", body: "Integrity, craftsmanship, speed, continuous technical innovation, and customer-first service on every project." },
  { icon: PiSealCheckDuotone, title: "Commitment to Quality", body: "Stringent quality control from digital prepress and paper selection through multi-color presswork and final packaging." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`The people behind ${site.shortName}`}
        description={`A printing and packaging powerhouse based in Ibadan, Nigeria, delivering high-grade print solutions to clients nationwide and worldwide.`}
      />

      <section className="section about-who">
        <div className="shell about-who__grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <span className="eyebrow">Who We Are</span>
            <h2>Delivering excellence in general printing, packaging, publishing &amp; finishing.</h2>
          </motion.div>
          <motion.div
            className="about-who__frame"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <img src="/images/offset-press.jpg" alt="Amsolf Prints Offset Press" className="about-who__img" />
          </motion.div>
        </div>
      </section>

      <section className="section about-story">
        <div className="shell about-story__inner">
          <SectionTitle eyebrow="Our Story" title="How it began" />
          <p>
            <strong>{site.founderTitle} {site.founder}</strong> founded{" "}
            {site.companyName} with a passion for quality print and a commitment
            to serving businesses, institutions and individuals across Nigeria and globally.
            Based at our production facility in Ibadan, we combine meticulous craftsmanship with reliable worldwide shipping, delivering finished books, commercial prints, billboards, and branded packaging to clients wherever they are.
          </p>
        </div>
      </section>

      {/* BRAND IDENTITY & OFFICIAL LOGO SHOWCASE */}
      <section className="section about-identity">
        <div className="shell">
          <div className="about-identity__card">
            <motion.div
              className="about-identity__logo-col"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="about-identity__logo-wrap">
                <img
                  src="/logo.jpg"
                  alt="Amsolf Prints and Packed Official 3D Insignia"
                  className="about-identity__logo-img"
                />
              </div>
            </motion.div>

            <motion.div
              className="about-identity__text-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <span className="eyebrow eyebrow--onDark">Brand Identity</span>
              <h2>A Symbol of Craft, Precision &amp; Quality</h2>
              <div className="about-identity__tagline-badge">
                <span>Printing Ideas. Packing Quality.</span>
              </div>
              <p>
                The official <strong>{site.companyName}</strong> insignia embodies our complete end-to-end print capability — combining high-precision multi-color offset lithography, commercial digital presswork, custom notebooks, and rigid presentation packaging.
              </p>
              <div className="about-identity__founder">
                <div className="about-identity__founder-info">
                  <strong>{site.founder}</strong>
                  <span>{site.founderTitle}, {site.companyName}</span>
                </div>
              </div>
              <div className="about-identity__badges">
                <span className="about-identity__pill">General Printing</span>
                <span className="about-identity__pill">Custom Notebooks</span>
                <span className="about-identity__pill">Book Publishing</span>
                <span className="about-identity__pill">Billboards</span>
                <span className="about-identity__pill">Packaging</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUBSIDIARY SHOWCASE: LAIDE COMPUTERS */}
      <section className="section about-subsidiary">
        <div className="shell">
          <div className="about-subsidiary__card">
            <div className="about-subsidiary__left">
              <span className="eyebrow">Enterprise Subsidiary</span>
              <h2>Laide Computers</h2>
              <p className="about-subsidiary__lead">
                The Dedicated Technology, Hardware &amp; Digital Prepress Arm of {site.companyName}
              </p>
              <p>
                Under the strategic leadership of <strong>{site.founder}</strong>, <strong>Laide Computers</strong> operates as our specialized subsidiary providing brand-new and grade-A computer systems, authentic accessories, desktop publishing, Arabic/English typesetting, and IT workstations to clients across Nigeria.
              </p>
              <div className="about-subsidiary__features">
                <span><PiLaptopDuotone /> Computer &amp; Laptop Sales</span>
                <span><PiDesktopDuotone /> Prepress &amp; Design Workstations</span>
                <span><PiFileTextDuotone /> Book Typesetting &amp; Publishing</span>
              </div>
              <div className="about-subsidiary__action">
                <Button to="/laide-computers" variant="primary" icon={<PiArrowRightBold />}>
                  Explore Laide Computers
                </Button>
              </div>
            </div>
            <div className="about-subsidiary__right">
              <div className="about-subsidiary__stat-box">
                <PiDesktopDuotone className="about-subsidiary__icon" />
                <h3>Tech &amp; Hardware Hub</h3>
                <p>Equipping creative studios, publishing houses, corporate offices and students with dependable computing power.</p>
                <div className="about-subsidiary__badge-row">
                  <span className="about-subsidiary__badge">Hardware</span>
                  <span className="about-subsidiary__badge">Prepress</span>
                  <span className="about-subsidiary__badge">Typesetting</span>
                  <span className="about-subsidiary__badge">IT Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="shell">
          <SectionTitle eyebrow="What Guides Us" title="Mission, vision & values" align="center" />
          <div className="about-values__grid">
            {VALUES.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                className="about-values__card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Icon />
                <h3>{title}</h3>
                <p>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
