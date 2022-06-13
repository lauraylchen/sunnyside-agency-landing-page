import { Fragment } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Services />
    </Fragment>
  );
}

export default App;
