import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Collections from "../components/sections/Collections";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/sections/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Features />
        <About />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
