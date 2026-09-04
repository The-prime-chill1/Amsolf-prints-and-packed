import { useState } from "react";
import { PiPaperPlaneTiltBold, PiUploadSimpleBold, PiCheckCircleBold } from "react-icons/pi";
import { site, buildQuoteWhatsAppMessage } from "../data/siteConfig";
import { services } from "../data/services";
import "./QuoteForm.css";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  quantity: "",
  size: "",
  description: "",
  deadline: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [fileName, setFileName] = useState("");
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildQuoteWhatsAppMessage(form) +
      (fileName ? `\n\nAttachment noted: ${fileName} (please attach this file directly in WhatsApp)` : "");
    const url = `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit} id="quote">
      <div className="quote-form__grid">
        <label>
          Full Name
          <input required type="text" value={form.name} onChange={update("name")} placeholder="Your full name" />
        </label>
        <label>
          Phone Number
          <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="e.g. 080..." />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
        </label>
        <label>
          Service Required
          <select required value={form.service} onChange={update("service")}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Quantity
          <input type="text" value={form.quantity} onChange={update("quantity")} placeholder="e.g. 500 copies" />
        </label>
        <label>
          Preferred Size
          <input type="text" value={form.size} onChange={update("size")} placeholder="e.g. A5, 60x160cm" />
        </label>
        <label>
          Preferred Deadline
          <input type="text" value={form.deadline} onChange={update("deadline")} placeholder="e.g. within 2 weeks" />
        </label>
        <label className="quote-form__file">
          Upload Design / File
          <span className="quote-form__fileInput">
            <PiUploadSimpleBold />
            <span>{fileName || "Choose a file (optional)"}</span>
            <input type="file" onChange={handleFile} />
          </span>
        </label>
      </div>

      <label className="quote-form__full">
        Project Description
        <textarea
          rows={4}
          value={form.description}
          onChange={update("description")}
          placeholder="Tell us about your project…"
        />
      </label>

      <p className="quote-form__note">
        This form doesn't upload files to a server. On submit, we'll open WhatsApp with your
        details pre-filled — attach your file there directly, or email it to {site.email}.
      </p>

      <button type="submit" className="btn btn--primary btn--md">
        <span>Send Quote Request</span>
        <PiPaperPlaneTiltBold />
      </button>

      {sent && (
        <p className="quote-form__sent">
          <PiCheckCircleBold /> WhatsApp should now be open with your request — send the message to complete it.
        </p>
      )}
    </form>
  );
}
