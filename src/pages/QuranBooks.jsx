import { motion } from "framer-motion";
import { PiArrowRightBold, PiCheckCircleBold } from "react-icons/pi";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import RegisterMark from "../components/RegisterMark";
import { site } from "../data/siteConfig";
import "./QuranBooks.css";

const QURAN_POINTS = ["Different sizes", "Quality paper", "Professional covers", "Hardcover options", "Softcover options", "Binding", "Bulk orders"];
const BOOK_TYPES = ["Novels", "Educational books", "Journals", "Magazines", "Company publications", "Islamic books", "Manuals", "Brochures"];
const FINISHING = ["Hardcover", "Softcover", "Perfect binding", "Saddle stitching", "Lamination", "Cutting", "Folding"];

const LARGE_FORMAT = ["Roll-up banners", "Flex banners", "Backdrops", "Posters", "Signboards", "Event branding", "Wall branding", "Exhibition displays"];

function Block({ eyebrow, title, items, reverse, image }) {
  return (
    <div className={`qb-block ${reverse ? "qb-block--reverse" : ""}`}>
      <motion.div
        className="qb-block__frame"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {image ? (
          <img src={image} alt={title} className="qb-block__img" />
        ) : (
          <>
            <RegisterMark />
            <span>Add imagery for this section</span>
          </>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <ul className="qb-block__list">
          {items.map((it) => (
            <li key={it}><PiCheckCircleBold /> {it}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function QuranBooks() {
  return (
    <>
      <PageHero
        eyebrow="Qur'an & Book Printing"
        title="Professional Qur'an, Book & Notebook Printing"
        description="From religious publications and custom notebooks to educational and corporate books, we provide professional printing and finishing services designed to meet your exact requirements."
      >
        <div style={{ marginTop: "1.75rem" }}>
          <Button to="/contact#quote" variant="onDark" icon={<PiArrowRightBold />}>
            Request a Book Printing Quote
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell">
          <Block
            eyebrow="Qur'an Printing"
            title="Printed with the care the text deserves"
            items={QURAN_POINTS}
            image="/images/quran.jpg"
          />
        </div>
      </section>

      <section className="section qb-alt">
        <div className="shell">
          <Block
            eyebrow="Books & Notebooks"
            title="Custom notebooks, jotters and every kind of publication"
            items={["Custom Notebooks", "School Exercise Books", "Branded Jotters", ...BOOK_TYPES]}
            image="/images/book-stack.jpg"
            reverse
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Block
            eyebrow="Book Finishing & Binding"
            title="Expert binding and finishing options"
            items={FINISHING}
            image="/images/booklet-table.jpg"
          />
        </div>
      </section>

      {/* LARGE FORMAT */}
      <section className="section large-format">
        <div className="shell">
          <SectionTitle
            eyebrow="Large Format Printing"
            title="Roll-Up Banner & Large Format Printing"
            description="Professional print quality and high-resolution graphics across multiple sizes — suited to exhibitions, conferences, churches, mosques, businesses and events."
          />
          <div className="large-format__grid">
            {LARGE_FORMAT.map((item, i) => (
              <motion.div
                key={item}
                className="large-format__chip"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {item}
              </motion.div>
            ))}
          </div>
          <div className="large-format__cta">
            <Button to="/contact#quote" variant="primary" icon={<PiArrowRightBold />}>
              Request a Roll-Up Banner Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="qb-cta">
        <div className="shell qb-cta__inner">
          <h2>Bring us your manuscript, artwork or brief — we'll handle print, binding and finishing.</h2>
          <div className="qb-cta__actions">
            <Button to="/contact#quote" variant="onDark">Request a Book Printing Quote</Button>
            <Button href={site.whatsappHref} variant="secondary" className="qb-cta__wa">Chat on WhatsApp</Button>
          </div>
        </div>
      </section>
    </>
  );
}
