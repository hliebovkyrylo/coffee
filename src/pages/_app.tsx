import type { AppProps } from 'next/app';
import "../styles/home-page.css";
import "../styles/base.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
}
