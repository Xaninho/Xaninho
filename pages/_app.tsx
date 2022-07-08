import type { AppProps } from 'next/app'
import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroSection />
    </div>
  );
}

export default MyApp
