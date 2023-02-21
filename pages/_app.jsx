import Page from '@/layout/Page';
import '@/styles/globals.css';
import 'toastify-js/src/toastify.css';

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
