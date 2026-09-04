const UPLOADED_DIR = "/@fs/C:/Users/Hp/.gemini/antigravity-ide/brain/324f0f1b-59fc-4216-b44b-1a32fce2be31/.user_uploaded";

export const galleryCategories = [
  { id: "all", label: "All Equipment" },
  { id: "cutting", label: "Cutting & Die-Cutting" },
  { id: "press", label: "Printing Presses" },
  { id: "converting", label: "Paper Converting & Slitting" },
  { id: "workshop", label: "Press Floor & Bindery" },
];

export const galleryItems = [
  {
    id: "aoyoo-digital-cutter",
    category: "cutting",
    title: "AOYOO CNC Digital Packaging & Flatbed Die-Cutter",
    subtitle: "Automatic Sheet-Fed Digital Die-Cutting & Creasing Machine",
    categoryLabel: "Packaging Die-Cutter",
    image: `${UPLOADED_DIR}/media_1788528247770.png`,
    fallbackImage: "/images/workshop.jpg",
    specs: {
      manufacturer: "AOYOO Digital Equipment",
      type: "CNC Drag Knife & Creasing Wheel Flatbed",
      cuttingSpeed: "Up to 1,200 mm/s",
      function: "Custom packaging box prototyping, sticker die-cutting, carton creasing & gasket cutting without dies",
    },
    description:
      "Our AOYOO digital flatbed cutter eliminates expensive steel die molds. It automatically feeds, cuts, creases, and perforates custom packaging boxes, luxury gift cartons, labels, and stickers directly from digital CAD artwork.",
  },
  {
    id: "auto-paper-guillotine",
    category: "cutting",
    title: "Heavy-Duty Automated Hydraulic Paper Guillotine",
    subtitle: "Computerized Precision Bulk Paper Trimmer",
    categoryLabel: "Paper Guillotine",
    image: `${UPLOADED_DIR}/media_1788528230619.png`,
    fallbackImage: "/images/offset-press.jpg",
    specs: {
      type: "Programmable Hydraulic Paper Guillotine",
      tableSize: "Large Format Air-Cushion Table",
      safety: "Infrared Optical Beam Safety Curtain",
      function: "Bulk paper ream cutting, book block flush trimming & poster sizing",
    },
    description:
      "Engineered for heavy-duty commercial paper cutting, this automated hydraulic guillotine features an air-bed table and digital program control to trim thousands of paper sheets, hardback book blocks, and calendars with millimetric accuracy.",
  },
  {
    id: "reel-paper-slitter",
    category: "converting",
    title: "Industrial Reel-to-Sheet Paper Slitting & Rewinding Unit",
    subtitle: "High-Speed Heavy Paper Roll Converting Machine",
    categoryLabel: "Paper Converter",
    image: `${UPLOADED_DIR}/media_1788528283508.png`,
    fallbackImage: "/images/press-rollers.jpg",
    specs: {
      type: "High-Speed Paper Roll Slitter & Rewinder",
      capacity: "Jumbo Mill Paper Reels & Board Stock",
      function: "Slitting raw paper rolls into custom sheet widths for offset presses",
    },
    description:
      "Our heavy-duty paper roll slitting line converts massive mill jumbo rolls into exact sheet dimensions for press feeding, packaging board production, and specialized paper converting requirements.",
  },
  {
    id: "heidelberg-einfarben",
    category: "press",
    title: "Original Heidelberg Einfarben Offset Press",
    subtitle: "Single-Color High-Volume Offset Press",
    categoryLabel: "Printing Press",
    image: `${UPLOADED_DIR}/media_1788525251095.jpg`,
    fallbackImage: "/images/hero-bg.jpg",
    specs: {
      manufacturer: "Heidelberg (Germany)",
      type: "Offset Letterset / Einfarben Press",
      sheetSize: "18\" × 25¼\" (46 × 64 cm)",
      function: "High-volume book work, Qur'an inner pages & publications",
    },
    description:
      "Our Original Heidelberg Einfarben offset press is engineered for heavy-duty, ultra-crisp monochrome print production. Ideal for printing high-page-count Islamic books, Qur'anic Arabic text, corporate registers, and volume publication inner pages with consistent ink density.",
  },
  {
    id: "wohlenberg-cutter",
    category: "cutting",
    title: "Wohlenberg Heavy-Duty Program Paper Trimmer",
    subtitle: "High-Precision Computerized Paper Cutter",
    categoryLabel: "Cutting Machine",
    image: `${UPLOADED_DIR}/media_1788525251097.png`,
    fallbackImage: "/images/workshop.jpg",
    specs: {
      manufacturer: "Wohlenberg",
      type: "Programmable Paper Cutter",
      precision: "Sub-Millimeter Edge Alignment",
      function: "Flush trimming hardcovers, calendars & packaging blanks",
    },
    description:
      "High-precision Wohlenberg cutting system with digital programmable memory for rapid, identical paper trimming across volume publication runs.",
  },
  {
    id: "heavy-offset-unit",
    category: "press",
    title: "Heavy-Duty Multi-Color Commercial Offset Line",
    subtitle: "Full-Color Commercial Offset Machinery",
    categoryLabel: "Printing Press",
    image: "/images/notebooks.jpg",
    specs: {
      type: "Multi-Color Commercial Offset Line",
      speed: "Up to 10,000 sheets/hour",
      function: "Full-color packaging, book covers, posters & calendars",
    },
    description:
      "Our multi-color offset press line handles vibrant full-color packaging boxes, glossy book jackets, corporate calendars, and high-impact marketing collateral with accurate CMYK color registration.",
  },
  {
    id: "embossing-foil-unit",
    category: "workshop",
    title: "Hot Foil Stamping & Embossing Press",
    subtitle: "Luxury Gold Foil & Debossing Machine",
    categoryLabel: "Finishing Machine",
    image: "/images/quran.jpg",
    specs: {
      type: "Pneumatic Hot Foil & Debossing Press",
      finishes: "Metallic Gold, Silver & Blind Deboss",
      function: "Hardcover Qur'an covers, luxury gift packaging & certificates",
    },
    description:
      "Precision foil stamping machine that applies shimmering metallic gold and silver foil onto leatherette and hardcovers, creating prestigious Qur'an bindings, diploma covers, and luxury product boxes.",
  },
  {
    id: "bindery-workshop",
    category: "workshop",
    title: "Hardcover & Bookbinding Assembly Floor",
    subtitle: "Section-Sewn & Case Binding Workshop",
    categoryLabel: "Press Floor",
    image: "/images/book-stack.jpg",
    specs: {
      type: "Industrial Bookbinding & Case-Making Station",
      bindingTypes: "Hardback, Thread-Sewn, Perfect Bind & Spiral",
      function: "Complete book binding, casing-in & spine gluing",
    },
    description:
      "Our dedicated bookbinding floor combines automated section-sewing machines with skilled hand-finishing craftsmen to assemble durable hardback books, holy Qur'ans, and journals built to last generations.",
  },
];
