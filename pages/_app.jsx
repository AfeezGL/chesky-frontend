import Page from '@/layout/Page';
import '@/styles/output.css';

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
