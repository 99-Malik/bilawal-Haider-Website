const LgSubServices = ({ title }) => {
  // Define brand color mapping
  const brandColors = {
    lg: "text-[#a50034]",
    samsung: "text-[#1428a0]",
    bosch: "text-[#ed1c24]",
    siemens: "text-[#009999]",
  };

  // Extract brand from title (assumes first word is brand)
  const brandKey = title.split(" ")[0].toLowerCase();

  // Pick color or fallback to neutral
  const color = brandColors[brandKey] || "text-gray-700";

  return (
    <div className={`text-lg font-medium ${color}`}>
      {title}
    </div>
  );
};

export default LgSubServices;
