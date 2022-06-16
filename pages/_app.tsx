import type { AppProps } from 'next/app'
import Link from "next/link";

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="header">
        <Link href="/">
          Portfolio
        </Link>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp
