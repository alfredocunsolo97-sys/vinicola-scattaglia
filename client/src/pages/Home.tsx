import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';

/*
 * DESIGN: Terroir Mediterraneo - Homepage
 * Landing page style with smooth scrolling sections
 * Warm Mediterranean color palette, elegant typography
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
