import { motion } from "framer-motion";
import { PiArrowRightBold } from "react-icons/pi";
import ServiceIcon from "./ServiceIcon";
import "./ServiceCard.css";

export default function ServiceCard({ service, index = 0, onLearnMore }) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: (index % 4) * 0.06 }}
    >
      <ServiceIcon name={service.icon} className="service-card__icon" />
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <button className="service-card__link" onClick={() => onLearnMore?.(service)}>
        Learn More <PiArrowRightBold />
      </button>
    </motion.article>
  );
}
