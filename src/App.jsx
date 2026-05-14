import Seo from "./components/Seo";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto bg-zinc-950 text-zinc-100">
      <Seo />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </main>
    </ReactLenis>
  );
};

export default App;
