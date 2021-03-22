import React, { useState } from "react";

import Sidebar from "../components/homescreen/Sidebar";
import Navbar from "../components/homescreen/Navbar";
import Footer from "../components/homescreen/Footer";
import SinglePost from "../components/blog/SinglePost";

const Post = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {console.log("eai")};
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SinglePost />
      <Footer />
    </div>
  );
};

export default Post;
