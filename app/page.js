import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { TestimonialsSection } from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    </>
  );
}
