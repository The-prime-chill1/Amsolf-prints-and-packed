export default function CmykDots({ className = "" }) {
  return (
    <span className={`cmyk-dots ${className}`} aria-hidden="true">
      <span className="c" />
      <span className="m" />
      <span className="y" />
      <span className="k" />
    </span>
  );
}
