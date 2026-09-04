import { motion } from "framer-motion";
import { PiImageBold } from "react-icons/pi";
import "./PortfolioCard.css";

export default function PortfolioCard({ item, index = 0, onOpen }) {
  return (
    <motion.button
      className="portfolio-card"
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: (index % 4) * 0.05 }}
    >
      <span className="portfolio-card__media">
        {item.image ? (
          <img src={item.image} alt={item.title} className="portfolio-card__img" />
        ) : (
          <>
            <PiImageBold />
            <em>Add project image</em>
          </>
        )}
      </span>
      <span className="portfolio-card__body">
        <span className="portfolio-card__category">{item.category}</span>
        <span className="portfolio-card__title">{item.title}</span>
      </span>
    </motion.button>
  );
}
