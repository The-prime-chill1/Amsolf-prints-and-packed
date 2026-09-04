import { motion } from "framer-motion";
import { PiStarFill, PiQuotesBold, PiSealCheckFill, PiChatCircleTextBold } from "react-icons/pi";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { reviews } from "../data/reviews";
import { site } from "../data/siteConfig";
import "./ReviewsSection.css";

export default function ReviewsSection() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="shell">
        <div className="reviews-section__header">
          <SectionTitle
            eyebrow="Client Testimonials"
            title="Trusted by authors, institutions & brands"
            description="From published books and Qur'ans to branded packaging and corporate prints, see what our clients say about our precision, print quality, and delivery."
            align="center"
          />

          <div className="reviews-section__trust-badge">
            <div className="reviews-section__stars">
              {[...Array(5)].map((_, i) => (
                <PiStarFill key={i} />
              ))}
            </div>
            <span>5.0 / 5.0 Rating • Verified Client Satisfaction</span>
          </div>
        </div>

        <div className="reviews-section__grid">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="review-card__top">
                <div className="review-card__stars" aria-label={`${r.rating} out of 5 stars`}>
                  {[...Array(r.rating)].map((_, s) => (
                    <PiStarFill key={s} />
                  ))}
                </div>
                <span className="review-card__project">{r.project}</span>
              </div>

              <p className="review-card__comment">
                <PiQuotesBold className="review-card__quote-icon" />
                "{r.comment}"
              </p>

              <div className="review-card__footer">
                <div className="review-card__avatar">
                  {r.name.charAt(0)}
                </div>
                <div className="review-card__meta">
                  <div className="review-card__name-row">
                    <strong>{r.name}</strong>
                    <PiSealCheckFill className="review-card__verified" title="Verified Customer" />
                  </div>
                  <span className="review-card__role">{r.role}</span>
                  <span className="review-card__loc">{r.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="reviews-section__cta">
          <p>Have you printed with us recently? We value your feedback.</p>
          <Button
            href={`${site.whatsappHref}?text=${encodeURIComponent("Hello, I would like to leave a review for Amsolf Prints and Packed.")}`}
            variant="secondary"
            icon={<PiChatCircleTextBold />}
          >
            Leave a Review on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
