import { Fragment } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Photos from "./components/Photos";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Photos />
      <Footer />
    </Fragment>
  );
}

export default App;
