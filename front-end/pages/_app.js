import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../store/store';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" type="image/svg+xml" href="/static/images/twitter-logo.svg" />
        <title>TA</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

