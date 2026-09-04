import {
  PiPenNibDuotone,
  PiBookOpenTextDuotone,
  PiBookBookmarkDuotone,
  PiFlagBannerFoldDuotone,
  PiBuildingsDuotone,
  PiPaintBrushBroadDuotone,
  PiNewspaperClippingDuotone,
  PiScissorsDuotone,
} from "react-icons/pi";

const ICONS = {
  design: PiPenNibDuotone,
  quran: PiBookOpenTextDuotone,
  book: PiBookBookmarkDuotone,
  banner: PiFlagBannerFoldDuotone,
  corporate: PiBuildingsDuotone,
  branding: PiPaintBrushBroadDuotone,
  publishing: PiNewspaperClippingDuotone,
  finishing: PiScissorsDuotone,
};

export default function ServiceIcon({ name, className = "" }) {
  const Cmp = ICONS[name] || PiPenNibDuotone;
  return <Cmp className={className} aria-hidden="true" />;
}
