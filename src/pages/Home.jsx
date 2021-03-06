import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Support from "../components/Support";
// import Pricing from "../components/Pricing";
// import Support from "../components/Support";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      {/* <AllInOne />  */}
      {/* <Pricing /> */}
      <Footer />
    </>
  );
};

export default Home;
