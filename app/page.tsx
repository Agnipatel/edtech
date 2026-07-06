import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PerformanceStarts from "@/components/ProcessSection";
import GrowthChallengesSection from "@/components/GrowthChallenges";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatApp";
import FaqSection from "@/components/FaqSection";
import WhyPandaeceSection from "@/components/WhyPandaeceSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-green-600">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

    
       {/* Growth */}
      <section id="growth" className="scroll-mt-20">
        <GrowthChallengesSection />
      </section>
      


         {/* Happy Clients */}
      <section id="happy-clients" className="scroll-mt-20">
        <IndustriesSection />
      </section>

       {/* Services */}
      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>

      <WhyPandaeceSection />

      {/* Performance */}
      <PerformanceStarts />

     

   

     

      {/* Contact */}
      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>

      
      

      {/* Fintech Process + FAQ Section (dual anchors) */}
      <span id="ivf-process" className="block scroll-mt-20" />
      <section id="faqSection" className="scroll-mt-20">
        <FaqSection />
      </section>

     
  {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20">
        <FinalCTASection />
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}