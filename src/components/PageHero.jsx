import { motion } from "framer-motion";
import RegisterMark from "./RegisterMark";
import "./PageHero.css";

export default function PageHero({ eyebrow, title, description, showLogo = true, children }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__inner">
        <RegisterMark className="page-hero__mark page-hero__mark--tl" />
        <RegisterMark className="page-hero__mark page-hero__mark--br" />
        
        <div className="page-hero__grid">
          <motion.div
            className="page-hero__copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {eyebrow && <span className="eyebrow eyebrow--onDark">{eyebrow}</span>}
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            {children}
          </motion.div>

          {showLogo && (
            <motion.div
              className="page-hero__badge"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="page-hero__badge-frame">
                <img src="/logo.jpg" alt="Amsolf Prints and Packed" className="page-hero__badge-img" />
              </div>
              <span className="page-hero__badge-tagline">Printing Ideas. Packing Quality.</span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
