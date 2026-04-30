import Hero from "@/components/sections/Hero";
import ProductCategorySection from "@/components/sections/ProductCategorySection";
import WhyNovecoSection from "@/components/sections/WhyNovecoSection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import SpecPreviewSection from "@/components/sections/SpecPreviewSection";
import InstallationSection from "@/components/sections/InstallationSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategorySection />
      <WhyNovecoSection />
      <FeaturedProductsSection />
      <SpecPreviewSection />
      <InstallationSection />
      <ContactCTASection />
    </>
  );
}
