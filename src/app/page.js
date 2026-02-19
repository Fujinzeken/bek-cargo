import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Coverage from "@/components/Coverage";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-primary">
          <Hero />
          <Marquee />
        </div>
        <About />
        <Services />
        <Fleet />
        <Coverage />
        <Compliance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
