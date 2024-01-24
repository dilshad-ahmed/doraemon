import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
