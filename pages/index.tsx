import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Highlights from '../components/Highlights';
import { HomeObjOne, HomeObjTwo } from '../components/InfoSection/Data';
import Footer from '../components/Footer';

function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroSection />
      <InfoSection {...HomeObjOne}/>
      <Highlights />
      <InfoSection {...HomeObjTwo}/>
      <Footer />
    </div>
  );
}

export default HomePage
