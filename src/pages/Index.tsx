{/* 
  Google Analytics placeholder: 
  Add GA tracking code here 

  Meta Pixel placeholder:
  Add Meta Pixel code here
*/}
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClaimsSection from "@/components/sections/ClaimsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <ClaimsSection />
    <ContactSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
