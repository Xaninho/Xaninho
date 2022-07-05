import type { AppProps } from 'next/app'
import Link from "next/link";
import Navbar from '../components/Navbar';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp
