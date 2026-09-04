import Button from "../components/Button";
import RegisterMark from "../components/RegisterMark";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="shell notfound__inner">
        <RegisterMark className="notfound__mark" />
        <span className="eyebrow">404</span>
        <h1>This page hasn't gone to print.</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <Button to="/" variant="primary">Back to Home</Button>
      </div>
    </section>
  );
}
