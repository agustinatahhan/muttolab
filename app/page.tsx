import Hero from "@/components/sections/Hero";
import CoursesSection from "@/components/sections/CoursesSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
     
      <main>
        <Hero />
        <CoursesSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
