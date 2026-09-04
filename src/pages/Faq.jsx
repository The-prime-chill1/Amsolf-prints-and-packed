import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PiCaretDownBold,
  PiMagnifyingGlassDuotone,
  PiQuestionBold,
  PiArrowRightBold,
  PiWhatsappLogoBold,
  PiChatCircleTextDuotone,
} from "react-icons/pi";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { faqCategories, faqs } from "../data/faq";
import { site } from "../data/siteConfig";
import "./Faq.css";

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(1);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <PageHero
        eyebrow="Help & Support"
        title="Frequently Asked Questions"
        description="Find clear answers regarding our printing presses, Qur'an publication binding, custom packaging, proofing policies, and worldwide delivery."
      />

      <section className="section faq-main">
        <div className="shell faq-container">
          {/* SEARCH & CATEGORY FILTER BAR */}
          <div className="faq-controls">
            <div className="faq-search-wrap">
              <PiMagnifyingGlassDuotone className="faq-search-icon" />
              <input
                type="text"
                placeholder="Search questions (e.g. Qur'an, shipping, artwork, turnaround)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
            </div>

            <div className="faq-tabs" role="tablist" aria-label="FAQ Categories">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`faq-tab ${activeCategory === cat.id ? "faq-tab--active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* ACCORDION LIST */}
          <div className="faq-accordion-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">
                        <PiQuestionBold className="faq-q-icon" />
                        {faq.question}
                      </span>
                      <span className={`faq-caret ${isOpen ? "faq-caret--rotated" : ""}`}>
                        <PiCaretDownBold />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                        >
                          <div className="faq-answer-inner">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="faq-empty-state">
                <PiChatCircleTextDuotone />
                <h3>No matching questions found</h3>
                <p>Try searching for a different keyword or contact our press team directly on WhatsApp.</p>
                <Button href={site.whatsappHref} variant="secondary" icon={<PiWhatsappLogoBold />}>
                  Ask Us on WhatsApp
                </Button>
              </div>
            )}
          </div>

          {/* CONTACT PROMPT CARD */}
          <div className="faq-contact-card">
            <div className="faq-contact-card__info">
              <h3>Have a question not listed here?</h3>
              <p>Our press managers are ready to assist you with custom quotes, sample proofs, and delivery arrangements.</p>
            </div>
            <div className="faq-contact-card__actions">
              <Button href={site.whatsappHref} variant="primary" icon={<PiWhatsappLogoBold />}>
                Chat on WhatsApp
              </Button>
              <Button to="/contact#quote" variant="secondary" icon={<PiArrowRightBold />}>
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-band">
        <div className="shell cta-band__inner">
          <div>
            <span className="eyebrow eyebrow--onDark">Ready to Start Your Project?</span>
            <h2>Get an instant price quote &amp; technical press estimate.</h2>
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
