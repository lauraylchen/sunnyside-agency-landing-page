import { Fragment } from "react";
import Features from "./components/Features";
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
    </Fragment>
  );
}

export default App;
