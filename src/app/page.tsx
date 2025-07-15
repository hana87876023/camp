import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-8">
        <HeroSection />
      </div>
      <ProductsSection />
      <ReviewsSection />
    </div>
  );
}
