import { useState } from "react";
import { motion } from "framer-motion";
import {
  PiDesktopDuotone,
  PiLaptopDuotone,
  PiHardDrivesDuotone,
  PiWrenchDuotone,
  PiWifiHighDuotone,
  PiFileTextDuotone,
  PiCpuDuotone,
  PiShieldCheckDuotone,
  PiWhatsappLogoBold,
  PiPhoneBold,
  PiArrowRightBold,
  PiCheckCircleBold,
  PiSparkleDuotone,
  PiStorefrontDuotone,
  PiHeadsetDuotone,
  PiSealCheckDuotone
} from "react-icons/pi";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { site } from "../data/siteConfig";
import "./LaideComputers.css";

const SERVICES = [
  {
    icon: PiLaptopDuotone,
    title: "Computer & Laptop Sales",
    badge: "Hardware",
    desc: "Brand new and certified grade-A laptops, mini PCs, and desktop towers tailored for corporate offices, students, schools, and demanding creative workflows.",
    features: ["Office & Business Laptops", "High-Performance Desktops", "Certified Grade-A Clean Systems", "Pre-installed Software Suites"],
  },
  {
    icon: PiDesktopDuotone,
    title: "Graphic & Prepress Workstations",
    badge: "Specialized",
    desc: "Custom-configured computing rigs with high-capacity RAM, dedicated graphics, and color-accurate displays optimized for Adobe Creative Cloud, CorelDRAW, and print prepress.",
    features: ["Color-Accurate Displays", "Multi-Core High-Speed CPUs", "Large Scratch SSDs", "Optimized for Print Workflows"],
  },
  {
    icon: PiHardDrivesDuotone,
    title: "Computer Accessories & Peripherals",
    badge: "Accessories",
    desc: "Complete stock of authentic computer accessories including external SSDs, flash drives, wireless keyboards & mice, heavy-duty UPS units, and power adapters.",
    features: ["External Storage & SSDs", "Keyboards, Mice & Trackpads", "UPS & Voltage Regulators", "HDMI, VGA & Display Cables"],
  },
  {
    icon: PiFileTextDuotone,
    title: "Desktop Publishing & Typesetting",
    badge: "Publishing",
    desc: "Professional book formatting, Arabic and English typesetting, digital manuscript conversion, and print-ready CTP file generation backed by our parent press.",
    features: ["Arabic & English Typesetting", "Book & Journal Layouts", "Manuscript Digitization", "CTP & Print Prepress Formatting"],
  },
  {
    icon: PiWrenchDuotone,
    title: "Computer Repairs & Maintenance",
    badge: "Technical Service",
    desc: "Rapid diagnostics, hardware troubleshooting, SSD/RAM speed upgrades, screen replacements, virus remediation, and operating system clean installations.",
    features: ["Hardware Diagnostics", "RAM & SSD Speed Boosts", "OS Clean Install & Tuning", "Preventive Maintenance"],
  },
  {
    icon: PiWifiHighDuotone,
    title: "Office IT Setup & Networking",
    badge: "Enterprise",
    desc: "Complete office computer lab and workplace network setup, multi-workstation printer sharing, centralized file storage, and data backup solutions.",
    features: ["Office Local Area Networks (LAN)", "Network Printer Integration", "Data Backup Architecture", "Workstation Cable Management"],
  },
];

const CATEGORIES = [
  {
    title: "Laptops & Desktops",
    icon: PiLaptopDuotone,
    items: ["Dell Latitude & OptiPlex", "HP EliteBook & ProBook", "Lenovo ThinkPad Series", "Custom Built Desktop Towers"],
  },
  {
    title: "Storage & Components",
    icon: PiCpuDuotone,
    items: ["High-speed NVMe & SATA SSDs", "DDR4 & DDR5 RAM Modules", "External Backup Hard Drives", "Power Supplies & Laptop Chargers"],
  },
  {
    title: "Peripherals & Input",
    icon: PiHardDrivesDuotone,
    items: ["Wireless & Mechanical Keyboards", "Ergonomic Optical Mice", "USB Hubs & Multi-Port Adapters", "Webcams & Headsets"],
  },
  {
    title: "Power & Protection",
    icon: PiShieldCheckDuotone,
    items: ["Pure Sine Wave UPS Systems", "Automatic Voltage Regulators (AVR)", "Heavy-duty Surge Protectors", "Laptop Replacement Batteries"],
  },
];

const ADVANTAGES = [
  {
    icon: PiSealCheckDuotone,
    title: "Authentic & Tested Hardware",
    desc: "Every laptop, desktop, and component goes through rigorous bench testing before delivery.",
  },
  {
    icon: PiSparkleDuotone,
    title: "Print & Design Optimized",
    desc: "Backed by Amsolf Prints' daily experience in demanding publishing, design, and typesetting.",
  },
  {
    icon: PiHeadsetDuotone,
    title: "Direct Technical Support",
    desc: "Fast hands-on assistance from knowledgeable technicians located right in Ibadan.",
  },
  {
    icon: PiStorefrontDuotone,
    title: "Corporate & Institutional Supply",
    desc: "Bulk supply capabilities for schools, cyber cafes, training institutes, and corporate firms.",
  },
];

export default function LaideComputers() {
  const [selectedService, setSelectedService] = useState("all");
  const [inquiryText, setInquiryText] = useState("");

  const handleWhatsAppInquiry = (customMsg) => {
    const text = customMsg || inquiryText || "Hello Laide Computers, I would like to inquire about your computer sales and IT services.";
    const url = `https://wa.me/2348155556909?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="laide-page">
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Subsidiary Company"
        title="LAIDE COMPUTERS"
        description="Your trusted destination for computer sales, genuine accessories, desktop publishing, prepress digital solutions, and hardware maintenance — operated under the parent company Amsolf Prints and Packed."
      >
        <div className="laide-hero__badges">
          <span className="laide-hero__badge">
            <PiSealCheckDuotone /> A Subsidiary of {site.companyName}
          </span>
          <span className="laide-hero__badge">
            <PiDesktopDuotone /> Ibadan, Nigeria
          </span>
        </div>
        <div className="laide-hero__cta-group">
          <Button
            href={`https://wa.me/2348155556909?text=${encodeURIComponent("Hello Laide Computers, I would like to make an enquiry about your computers, accessories and IT services.")}`}
            variant="onDark"
            icon={<PiWhatsappLogoBold />}
            target="_blank"
          >
            Chat with Laide Computers
          </Button>
          <Button to="/contact" variant="secondary" icon={<PiPhoneBold />}>
            Contact Sales Desk
          </Button>
        </div>
      </PageHero>

      {/* SUBSIDIARY SYNERGY SPOTLIGHT */}
      <section className="section laide-synergy">
        <div className="shell">
          <div className="laide-synergy__card">
            <motion.div
              className="laide-synergy__content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="laide-synergy__pill">
                <PiSparkleDuotone />
                <span>Parent Company Synergy</span>
              </div>
              <h2>Where Technology Meets High-Grade Print Precision</h2>
              <p>
                Founded and directed under the visionary leadership of <strong>{site.founder}</strong>,{" "}
                <strong>Laide Computers</strong> functions as the dedicated technology, hardware, and digital prepress arm of <strong>{site.companyName}</strong>.
              </p>
              <p>
                Whether you need reliable laptops for your office, custom high-spec workstations for graphic design, authentic storage accessories, or expert desktop publishing and typesetting for your books and journals, Laide Computers provides the dependable computational foundation for your projects.
              </p>

              <div className="laide-synergy__points">
                <div className="laide-synergy__point">
                  <PiCheckCircleBold className="laide-synergy__check" />
                  <div>
                    <strong>Direct Prepress Integration</strong>
                    <span>Seamless transition from digital typesetting to offset lithography press.</span>
                  </div>
                </div>
                <div className="laide-synergy__point">
                  <PiCheckCircleBold className="laide-synergy__check" />
                  <div>
                    <strong>Genuine Hardware Guarantee</strong>
                    <span>Quality-tested components, chargers, storage, and computing systems.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="laide-synergy__visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="laide-synergy__glass-panel">
                <div className="laide-synergy__icon-orb">
                  <PiCpuDuotone />
                </div>
                <div className="laide-synergy__stat-title">LAIDE COMPUTERS</div>
                <div className="laide-synergy__stat-sub">Subsidiary of {site.companyName}</div>
                <hr className="laide-synergy__divider" />
                <ul className="laide-synergy__specs-list">
                  <li><span>Core Focus:</span> <strong>Hardware, IT &amp; Prepress</strong></li>
                  <li><span>Leadership:</span> <strong>{site.founder} ({site.founderTitle})</strong></li>
                  <li><span>Headquarters:</span> <strong>{site.address}</strong></li>
                  <li><span>Delivery:</span> <strong>Nationwide Shipping Available</strong></li>
                </ul>
                <div className="laide-synergy__action">
                  <a
                    href="tel:+2348155556909"
                    className="laide-synergy__call-btn"
                  >
                    <PiPhoneBold /> Call: +234 815 555 6909
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="section laide-services">
        <div className="shell">
          <SectionTitle
            eyebrow="What We Offer"
            title="Comprehensive Computer & IT Solutions"
            description="Explore our specialized range of computer hardware, software installations, publishing typesetting, and support services."
            align="center"
          />

          <div className="laide-services__grid">
            {SERVICES.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  className="laide-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className="laide-card__header">
                    <div className="laide-card__icon-box">
                      <Icon />
                    </div>
                    <span className="laide-card__badge">{svc.badge}</span>
                  </div>
                  <h3 className="laide-card__title">{svc.title}</h3>
                  <p className="laide-card__desc">{svc.desc}</p>
                  <ul className="laide-card__list">
                    {svc.features.map((feat) => (
                      <li key={feat}>
                        <PiCheckCircleBold /> {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="laide-card__action-btn"
                    onClick={() =>
                      handleWhatsAppInquiry(
                        `Hello Laide Computers, I want to make an enquiry about: ${svc.title}`
                      )
                    }
                  >
                    <span>Inquire About This</span>
                    <PiWhatsappLogoBold />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HARDWARE & ACCESSORIES CATALOG HIGHLIGHTS */}
      <section className="section laide-catalog">
        <div className="shell">
          <SectionTitle
            eyebrow="Product Categories"
            title="Computer Hardware, Parts & Peripherals"
            description="We supply verified brands and durable components to keep your workplace running smoothly."
          />

          <div className="laide-catalog__grid">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  className="laide-cat-box"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className="laide-cat-box__icon">
                    <Icon />
                  </div>
                  <h4>{cat.title}</h4>
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE LAIDE COMPUTERS */}
      <section className="section laide-why">
        <div className="shell">
          <SectionTitle
            eyebrow="The Laide Computers Advantage"
            title="Why Choose Laide Computers?"
            align="center"
          />

          <div className="laide-why__grid">
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  className="laide-why__card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className="laide-why__icon">
                    <Icon />
                  </div>
                  <h3>{adv.title}</h3>
                  <p>{adv.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK INQUIRY / CONTACT BOX */}
      <section className="section laide-inquiry">
        <div className="shell">
          <div className="laide-inquiry__banner">
            <div className="laide-inquiry__info">
              <span className="eyebrow eyebrow--onDark">Get in Touch</span>
              <h2>Ready to upgrade your computer systems or request typesetting?</h2>
              <p>
                Speak directly with our technical team for instant hardware recommendations, bulk pricing, or desktop publishing project quotes.
              </p>
              <div className="laide-inquiry__contacts">
                <a href={site.phoneHref} className="laide-inquiry__phone-link">
                  <PiPhoneBold /> {site.phone}
                </a>
                <a href={site.phone2Href} className="laide-inquiry__phone-link">
                  <PiPhoneBold /> {site.phone2}
                </a>
              </div>
            </div>

            <div className="laide-inquiry__form-card">
              <h3>Send a Quick Enquiry</h3>
              <p>Type your request below to message us directly on WhatsApp:</p>
              <div className="laide-inquiry__input-wrap">
                <textarea
                  className="laide-inquiry__textarea"
                  rows={3}
                  placeholder="e.g. I need 3 office laptops and high-speed SSD upgrades..."
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                />
              </div>
              <button
                className="laide-inquiry__submit-btn"
                onClick={() => handleWhatsAppInquiry()}
              >
                <PiWhatsappLogoBold />
                <span>Chat with Laide Computers on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BACK TO PARENT PRINT COMPANY PROMO */}
      <section className="section laide-parent-promo">
        <div className="shell laide-parent-promo__inner">
          <div>
            <span className="eyebrow">Amsolf Prints &amp; Packed</span>
            <h3>Looking for Commercial Printing, Packaging or Billboards?</h3>
            <p>
              Explore our parent printing facility offering offset lithography, Qur'an &amp; book printing, rigid packaging, and large-format roll-up banners.
            </p>
          </div>
          <div className="laide-parent-promo__actions">
            <Button to="/services" variant="primary" icon={<PiArrowRightBold />}>
              Explore Print Services
            </Button>
            <Button to="/about" variant="secondary">
              About Amsolf
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
