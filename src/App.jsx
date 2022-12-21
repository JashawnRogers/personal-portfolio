import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuOverlay from "./components/MenuOverlay";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import memoji from "./images/memojiBigger2.png";

function App() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/" },
    { name: "Skills", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <div className="text-white bg-black h-full">
        <Navbar
          navLinks={navLinks}
          openMobileNav={openMobileNav}
          setOpenMobileNav={setOpenMobileNav}
        />
        <MenuOverlay
          navLinks={navLinks}
          openMobileNav={openMobileNav}
          setOpenMobileNav={setOpenMobileNav}
        />
        <Hero memoji={memoji}
          navLinks={navLinks}
        />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
