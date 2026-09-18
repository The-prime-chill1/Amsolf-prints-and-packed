import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/siteConfig";

const pageMeta = {
  "/": {
    title: "Amsolf Prints and Packed | Printing, Packaging & Books — Ibadan to Worldwide",
    description:
      "Amsolf Prints and Packed is a premier commercial printing, packaging, and publishing press in Ibadan, Nigeria, delivering worldwide. Specialists in book printing, holy Qur'ans, custom packaging, billboards, and corporate branding.",
  },
  "/about": {
    title: "About Us | Amsolf Prints and Packed — Founded by ASIWAJU Z.A OLAIDE",
    description:
      "Learn about Amsolf Prints and Packed, our press floor capabilities, our founder ASIWAJU Z.A OLAIDE, and our commitment to world-class print engineering.",
  },
  "/services": {
    title: "Commercial Printing & Packaging Services | Amsolf Prints and Packed",
    description:
      "Explore our services: multi-color offset lithography, hardcover book binding, Holy Qur'an printing, custom packaging boxes, billboards, and corporate calendars.",
  },
  "/portfolio": {
    title: "Client Portfolio & Press Showcase | Amsolf Prints and Packed",
    description:
      "Browse our showcase of finished books, Qur'ans, packaging boxes, corporate stationery, and large-format billboard installations.",
  },
  "/quran-book-printing": {
    title: "Holy Qur'an & Book Publishing | Amsolf Prints and Packed",
    description:
      "Specialized Qur'an printing and publishing services: archival paper, gold and silver foil stamping, leatherette hardcovers, and strict reverence standards.",
  },
  "/laide-computers": {
    title: "Laide Computers | Subsidiary of Amsolf Prints and Packed",
    description:
      "Computer sales, brand new and refurbished laptops, IT accessories, desktop publishing, and digital prepress solutions by Laide Computers.",
  },
  "/gallery": {
    title: "Production & Press Floor Gallery | Amsolf Prints and Packed",
    description:
      "View real-world photos of our high-speed printing presses, book finishing machines, and premium finished packaging boxes.",
  },
  "/faq": {
    title: "Frequently Asked Questions (FAQ) | Amsolf Prints and Packed",
    description:
      "Get clear answers about minimum order quantities, artwork file preparation, turnarounds, shipping to UK/US/worldwide, and quote requests.",
  },
  "/contact": {
    title: "Contact Us & Request a Quote | Amsolf Prints and Packed",
    description:
      "Get in touch with Amsolf Prints and Packed in Ibadan, Nigeria. Request an instant quote via WhatsApp or phone call for your printing project.",
  },
  "/privacy": {
    title: "Privacy Policy & Artwork Security | Amsolf Prints and Packed",
    description:
      "Read our client privacy guarantee, artwork confidentiality policy, quality assurance terms, and international shipping protocols.",
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
      title: `${site.companyName} | Ibadan to Worldwide Delivery`,
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
