import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ProductShowcase from "@/sections/ProductShowcase";
import Services from "@/sections/Services";
import Socials from "@/sections/Socials";
import USP from "@/sections/USP";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <ProductShowcase />
      <USP />
      <Socials />
      <Footer />
    </main>
  );
}
