import FixedCallButtons from "@/components/buttons/FixCallButtons";
import Header from "@/components/headers/Header";
import Footer from "@/components/sections/home/Footer";

const BrandLayout = ({ children }) => {
  return (
    <main className="flex flex-col">
      <Header />
      {children}
      <Footer />
      <FixedCallButtons />
    </main>
  );
};

export default BrandLayout;

