import AboutSection from "@/components/About";
import { StatsSection } from "@/components/Analytic";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Service";
import { TestimonialsSection } from "@/components/Testimonial";
import { ExperienceSection } from "@/components/WhyUs";
import { ProjectsSection } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>

  );
}
