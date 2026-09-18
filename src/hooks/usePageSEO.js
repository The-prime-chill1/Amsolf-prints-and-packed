import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/siteConfig";

const pageMeta = {
  "/": {
    title: "Amsolf Prints and Packed | Printing & Packaging Ibadan",
    description:
      "Commercial printing, packaging, and book publishing in Ibadan, Nigeria. Holy Qur'an printing, custom boxes, billboards, and worldwide delivery.",
  },
  "/about": {
    title: "About Us | Amsolf Prints and Packed Ibadan",
    description:
      "Learn about Amsolf Prints and Packed, our press floor capabilities, founder ASIWAJU Z.A OLAIDE, and world-class print engineering in Ibadan.",
  },
  "/services": {
    title: "Printing & Packaging Services | Amsolf Prints",
    description:
      "Multi-color offset lithography, book binding, Holy Qur'an printing, custom boxes, billboards, and corporate calendars in Ibadan, Nigeria.",
  },
  "/portfolio": {
    title: "Client Portfolio & Showcase | Amsolf Prints",
    description:
      "Browse our portfolio of printed books, Qur'ans, custom packaging boxes, corporate stationery, and large-format billboards.",
  },
  "/quran-book-printing": {
    title: "Holy Qur'an & Book Publishing | Amsolf Prints",
    description:
      "Qur'an printing and book publishing: archival paper, gold and silver foil stamping, leatherette hardcovers, and strict reverence.",
  },
  "/laide-computers": {
    title: "Laide Computers | Laptops & Prepress Solutions",
    description:
      "Laptops, desktop computers, IT accessories, digital prepress formatting, and desktop publishing by Laide Computers in Ibadan.",
  },
  "/gallery": {
    title: "Press Floor & Work Gallery | Amsolf Prints",
    description:
      "Photo gallery of our printing presses, book finishing machinery, and premium custom packaging boxes produced in Ibadan.",
  },
  "/faq": {
    title: "Frequently Asked Questions | Amsolf Prints",
    description:
      "Find answers about minimum order quantities, artwork preparation, production timelines, international shipping, and quote requests.",
  },
  "/contact": {
    title: "Contact Us & Request a Quote | Amsolf Prints",
    description:
      "Contact Amsolf Prints and Packed in Ibadan, Nigeria. Request an instant quote via WhatsApp or phone call for your printing project.",
  },
  "/privacy": {
    title: "Privacy & Artwork Policy | Amsolf Prints",
    description:
      "Read our client confidentiality guarantee, artwork intellectual property protection, quality assurance terms, and shipping policy.",
  },
};

function setOrUpdateMeta(selector, attribute, value) {
  let element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function usePageSEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: `${site.companyName} | Printing & Packaging Ibadan`,
      description: site.tagline,
    };

    const baseUrl = site.siteUrl || "https://www.amsolfprintsandpacked.com";
    const fullUrl = location.pathname === "/" ? `${baseUrl}/` : `${baseUrl}${location.pathname}`;

    // Update Title
    document.title = meta.title;

    // Update Meta Description
    setOrUpdateMeta('meta[name="description"]', "content", meta.description);

    // Update Open Graph Tags
    setOrUpdateMeta('meta[property="og:title"]', "content", meta.title);
    setOrUpdateMeta('meta[property="og:description"]', "content", meta.description);
    setOrUpdateMeta('meta[property="og:url"]', "content", fullUrl);

    // Update Twitter Tags
    setOrUpdateMeta('meta[name="twitter:title"]', "content", meta.title);
    setOrUpdateMeta('meta[name="twitter:description"]', "content", meta.description);
    setOrUpdateMeta('meta[name="twitter:url"]', "content", fullUrl);

    // Update Canonical URL
    setOrUpdateMeta('link[rel="canonical"]', "href", fullUrl);
  }, [location]);
}
