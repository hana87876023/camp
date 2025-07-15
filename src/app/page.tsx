import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
    </div>
  );
}
