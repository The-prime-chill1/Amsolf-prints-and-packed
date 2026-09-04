// ─────────────────────────────────────────────────────────────
// SITE CONFIG — replace every PLACEHOLDER value with real client
// information. Nothing here is invented company history, pricing,
// or statistics — swap these in once supplied by the client.
// ─────────────────────────────────────────────────────────────

export const site = {
  companyName: "Amsolf Prints and Packed",
  shortName: "Amsolf Prints and Packed",
  tagline: "General Printing, Design, Books, Billboards, Calendars & More",
  location: "Ibadan, Nigeria",
  delivery: "Worldwide & Nationwide Delivery",
  founder: "Alh. Bello Olaide",
  founderTitle: "Founder & CEO",
  logo: "/logo.jpg",

  phone: "+234 815 555 6909",
  phoneHref: "tel:+2348155556909",
  phone2: "+234 803 323 3135",
  phone2Href: "tel:+2348033233135",
  whatsappNumber: "+2348155556909",
  whatsappHref: "https://wa.me/2348155556909",
  email: "belloolaide08@gmail.com",
  emailHref: "mailto:belloolaide08@gmail.com",
  address: "No. 1 Lam Ta Ololade Crescent, Adetokun, Eleyele, Ibadan",
  businessHours: "Mon – Sat: 8:00 AM – 6:00 PM",

  social: {
    instagram: "[INSTAGRAM URL]",
    facebook: "[FACEBOOK URL]",
    tiktok: "[TIKTOK URL]",
  },

  // Only populated once the client supplies verified figures —
  // left blank rather than invented. Add entries like
  // { value: "10+", label: "Years Experience" } when confirmed.
  stats: [],
};

export const defaultWhatsAppMessage =
  "Hello, I would like to make an enquiry about your printing and design services.";

export function buildQuoteWhatsAppMessage(form) {
  const lines = [
    "Hello, I'd like to request a printing quote.",
    "",
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Email: ${form.email || "-"}`,
    `Service: ${form.service || "-"}`,
    `Quantity: ${form.quantity || "-"}`,
    `Preferred size: ${form.size || "-"}`,
    `Preferred deadline: ${form.deadline || "-"}`,
    `Delivery destination: ${form.deliveryLocation || "-"}`,
    "",
    `Project details: ${form.description || "-"}`,
  ];
  return lines.join("\n");
}
