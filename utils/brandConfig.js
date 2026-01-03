export const brandConfig = {
  lg: {
    name: "LG",
    logo: "/lg.svg",
    color: "#A50034",
    borderColor: "border-[#A50034]",
    textColor: "text-[#A50034]",
    bgColor: "bg-[#A50034]",
    description: "LG Service Center: Fast, reliable repairs for a hassle-free home.",
    content: "Our skilled technicians are committed to restoring your LG appliances to peak performance, ensuring your comfort and convenience. From fixing minor glitches to tackling major breakdowns, we've got you covered. Experience top-notch service that keeps your household running smoothly!",
  },
  bosch: {
    name: "Bosch",
    logo: "/bosch.svg",
    color: "#EA0016",
    borderColor: "border-[#EA0016]",
    textColor: "text-[#EA0016]",
    bgColor: "bg-[#EA0016]",
    description: "Bosch Service Center: Fast, reliable repairs for a hassle-free home.",
    content: "Our skilled technicians are committed to restoring your Bosch appliances to peak performance, ensuring your comfort and convenience. From fixing minor glitches to tackling major breakdowns, we've got you covered. Experience top-notch service that keeps your household running smoothly!",
  },
  siemens: {
    name: "Siemens",
    logo: "/siemens.svg",
    color: "#009999",
    borderColor: "border-[#009999]",
    textColor: "text-[#009999]",
    bgColor: "bg-[#009999]",
    description: "Siemens Service Center: Fast, reliable repairs for a hassle-free home.",
    content: "Our skilled technicians are committed to restoring your Siemens appliances to peak performance, ensuring your comfort and convenience. From fixing minor glitches to tackling major breakdowns, we've got you covered. Experience top-notch service that keeps your household running smoothly!",
  },
};

export const getBrandConfig = (brand) => {
  return brandConfig[brand] || null;
};

export const isValidBrand = (brand) => {
  return brand && brandConfig.hasOwnProperty(brand);
};

// Helper function to lighten a hex color
export const lightenColor = (hex, percent) => {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * percent));
  const g = Math.min(255, ((num >> 8) & 0x00FF) + Math.round((255 - ((num >> 8) & 0x00FF)) * percent));
  const b = Math.min(255, (num & 0x0000FF) + Math.round((255 - (num & 0x0000FF)) * percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

// Helper function to darken a hex color
export const darkenColor = (hex, percent) => {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - Math.round((num >> 16) * percent));
  const g = Math.max(0, ((num >> 8) & 0x00FF) - Math.round(((num >> 8) & 0x00FF) * percent));
  const b = Math.max(0, (num & 0x0000FF) - Math.round((num & 0x0000FF) * percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

