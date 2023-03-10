import { auth } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head';
import { createContext, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Footer from './partials/Footer';
import NavBar from './partials/Navbar';

const queryClient = new QueryClient();
export const AuthContext = createContext();

export default function Page({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={isAuthenticated}>
        <Head>
          <title>Chesky</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <NavBar />
        <main className='mx-auto px-4 lg:container'>{children}</main>
        <Footer />
      </AuthContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
