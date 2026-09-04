import "./ContactCard.css";

export default function ContactCard({ icon, label, value, href }) {
  const Body = href ? "a" : "div";
  return (
    <Body className="contact-card" {...(href ? { href } : {})}>
      <span className="contact-card__icon">{icon}</span>
      <span>
        <span className="contact-card__label">{label}</span>
        <span className="contact-card__value">{value}</span>
      </span>
    </Body>
  );
}
