import { AppProps } from 'next/app';
import Head from 'next/head';
import './app.scss';
import TutorialHeader from '../components/TutorialHeader';
import { Content } from 'carbon-components-react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Carbon Tutorial</title>
      </Head>
      <div>
        <TutorialHeader />
        <Content>
          <Component {...pageProps} />
        </Content>
      </div>
    </>
  );
}

export default CustomApp;
