import React, { useState } from "react";

import Sidebar from "../components/homescreen/Sidebar";
import Navbar from "../components/homescreen/Navbar";
import Project from "../components/projects/Projects";
import Footer from "../components/homescreen/Footer";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
