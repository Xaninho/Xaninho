import React, { useState } from "react";

import Sidebar from "../components/homescreen/Sidebar";
import Navbar from "../components/homescreen/Navbar";
import Hero from "../components/homescreen/HeroSection";
import LatestPosts from "../components/homescreen/LatestPosts";
import MainProjects from "../components/homescreen/MainProjects";
import Footer from "../components/homescreen/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} noTransparent={false} />
      <Hero />
      <LatestPosts />
      <MainProjects />
      <Footer />
    </div>
  );
};

export default Home;
