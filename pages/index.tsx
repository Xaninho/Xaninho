import React, {useState} from 'react'
import Head from 'next/head'
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

      <Head>
        
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="portfolio, react, next, typescript, developer, projects" />
        <meta name="description" content="My portfolio. Now I just need to add projects!"/>
        <meta property="og:title" content="Xaninho's Portfolio" />
        <meta property="og:image" content="https://alexandredeveloper.netlify.app/images/profilePicture.jfif" />
        <meta property="og:description" content="My portfolio. Now I just need to add projects!" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
        
      </Head>

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
