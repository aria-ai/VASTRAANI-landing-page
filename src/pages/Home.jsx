import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import CollectionsHub from "../components/sections/CollectionsHub";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import BrandPhilosophy from "../components/sections/BrandPhilosophy";
import TheVastraaniWay from "../components/sections/TheVastraaniWay";
import Bespoke from "../components/sections/Bespoke";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/sections/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CollectionsHub />
        <Features />
        <About />
        <BrandPhilosophy />
        <TheVastraaniWay />
        <Bespoke />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
