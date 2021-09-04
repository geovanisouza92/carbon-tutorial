import { AppProps } from 'next/app';
import Head from 'next/head';
import './app.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Carbon Tutorial</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
