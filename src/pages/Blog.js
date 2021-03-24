import React, { useState } from "react";

import Sidebar from "../components/homescreen/Sidebar";
import Navbar from "../components/homescreen/Navbar";
import Footer from "../components/homescreen/Footer";
import Posts from "../components/blog/Posts/Posts";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} noTransparent={true} />
      <Posts />
      <Footer />
    </div>
  );
};

export default Blog;
