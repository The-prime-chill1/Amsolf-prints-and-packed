import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import PortfolioCard from "../components/PortfolioCard";
import Modal from "../components/Modal";
import { portfolioCategories, portfolioItems } from "../data/services";
import "./Portfolio.css";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [modalItem, setModalItem] = useState(null);

  const filtered =
    active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Our Recent Work"
        description="A gallery of our design and print projects — filter by category, or add real project photography into these slots."
      />

      <section className="section portfolio-page">
        <div className="shell">
          <div className="portfolio-page__filters" role="tablist" aria-label="Filter portfolio">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`portfolio-page__filter ${active === c ? "is-active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="portfolio-page__grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <PortfolioCard key={item.id} item={item} index={i} onOpen={setModalItem} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="portfolio-page__empty">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <Modal item={modalItem} onClose={() => setModalItem(null)} />
    </>
  );
}
