import '../styles/global.scss'
import 'semantic-ui-css/semantic.min.css'
import App from "next/app";
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <>
          <Head>
            <title>Squanchipedia</title>
          </Head>
          <Component {...pageProps} />
        </>
    );
  }
}
export default MyApp;