import React from "react";
import Footer from "../common/Footer/Footer.common";
import Navbar from "../common/Navbar/Navbar";
import Slider from "../common/React-slick/Slider";
import About from "./About/About.component";
import Contact from "./Contact/Contact.component";
import Services from "./Services/Services.component";
export const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
