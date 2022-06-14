import { Fragment } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
    </Fragment>
  );
}

export default App;
