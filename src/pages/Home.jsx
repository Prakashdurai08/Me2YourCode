import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Portfolio />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  );
}