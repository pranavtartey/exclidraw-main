import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ProductShowcase from "@/sections/ProductShowcase";
import Services from "@/sections/Services";
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
    </main>
  );
}
