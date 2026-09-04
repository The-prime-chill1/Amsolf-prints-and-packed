import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PiGearDuotone,
  PiMagnifyingGlassPlusBold,
  PiCheckCircleBold,
  PiArrowRightBold,
  PiWhatsappLogoBold,
  PiWrenchDuotone,
  PiXBold,
} from "react-icons/pi";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import RegisterMark from "../components/RegisterMark";
import { galleryCategories, galleryItems } from "../data/gallery";
import { site } from "../data/siteConfig";
import "./Gallery.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMachine, setSelectedMachine] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Press Floor & Machinery"
        title="Our Printing Presses & Cutting Equipment"
        description="Take a look behind the scenes at our heavy-duty offset presses, automated paper cutters, foil stamping units, and bindery machinery."
      />

      <section className="section gallery-main">
        <div className="shell">
          <SectionTitle
            eyebrow="Equipment Showcase"
            title="Precision Machinery Powering Our Production"
            description="From single-color offset presses for high-volume bookwork to automated guillotine cutters for surgical trimming accuracy."
            align="center"
          />

          {/* CATEGORY FILTER TABS */}
          <div className="gallery-tabs" role="tablist" aria-label="Machinery Categories">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`gallery-tab ${activeCategory === cat.id ? "gallery-tab--active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* MACHINERY GRID */}
          <motion.div className="gallery-grid" layout>
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="machine-card"
                  onClick={() => setSelectedMachine(item)}
                >
                  <div className="machine-card__image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="machine-card__image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/offset-press.jpg";
                      }}
                    />
                    <div className="machine-card__overlay">
                      <span className="machine-card__zoom-btn">
                        <PiMagnifyingGlassPlusBold /> View Equipment Details
                      </span>
                    </div>
                    <span className="machine-card__badge">{item.categoryLabel}</span>
                  </div>

                  <div className="machine-card__body">
                    <h3 className="machine-card__title">{item.title}</h3>
                    <p className="machine-card__subtitle">{item.subtitle}</p>

                    <div className="machine-card__specs">
                      {item.specs.manufacturer && (
                        <span className="machine-spec-tag">
                          <strong>Brand:</strong> {item.specs.manufacturer}
                        </span>
                      )}
                      {item.specs.type && (
                        <span className="machine-spec-tag">
                          <strong>Type:</strong> {item.specs.type}
                        </span>
                      )}
                    </div>

                    <p className="machine-card__desc">{item.description}</p>

                    <button className="machine-card__action">
                      <span>Technical Specs &amp; Uses</span>
                      <PiArrowRightBold />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* MACHINERY LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedMachine && (
          <div className="machine-modal-backdrop" onClick={() => setSelectedMachine(null)}>
            <motion.div
              className="machine-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="machine-modal__close"
                onClick={() => setSelectedMachine(null)}
                aria-label="Close modal"
              >
                <PiXBold />
              </button>

              <div className="machine-modal__grid">
                <div className="machine-modal__image-side">
                  <img
                    src={selectedMachine.image}
                    alt={selectedMachine.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/offset-press.jpg";
                    }}
                  />
                  <div className="machine-modal__badge">
                    <PiWrenchDuotone /> Industrial Equipment
                  </div>
                </div>

                <div className="machine-modal__content-side">
                  <span className="eyebrow">{selectedMachine.categoryLabel}</span>
                  <h2>{selectedMachine.title}</h2>
                  <p className="machine-modal__subtitle">{selectedMachine.subtitle}</p>

                  <div className="machine-modal__specs-box">
                    <h4>Technical Parameters &amp; Specifications</h4>
                    <ul>
                      {Object.entries(selectedMachine.specs).map(([key, val]) => (
                        <li key={key}>
                          <PiCheckCircleBold />
                          <span>
                            <strong className="text-capitalize">{key}:</strong> {val}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="machine-modal__desc">{selectedMachine.description}</p>

                  <div className="machine-modal__actions">
                    <Button
                      to="/contact#quote"
                      variant="primary"
                      icon={<PiArrowRightBold />}
                      onClick={() => setSelectedMachine(null)}
                    >
                      Request Quote For This Press
                    </Button>
                    <Button
                      href={site.whatsappHref}
                      variant="secondary"
                      icon={<PiWhatsappLogoBold />}
                    >
                      Enquire on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA BANNER */}
      <section className="cta-band">
        <div className="shell cta-band__inner">
          <div>
            <span className="eyebrow eyebrow--onDark">Need High-Volume Printing?</span>
            <h2>Book production time on our offset presses &amp; cutting machinery today.</h2>
          </div>
          <div className="cta-band__actions">
            <Button to="/contact#quote" variant="onDark" icon={<PiArrowRightBold />}>
              Request a Press Quote
            </Button>
            <Button href={site.whatsappHref} variant="secondary" className="cta-band__wa">
              Chat with Our Pressman
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
