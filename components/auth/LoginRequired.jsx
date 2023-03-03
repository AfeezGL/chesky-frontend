import { AuthContext } from '@/layout/Page';
import { useContext } from 'react';
import { LoginScreen } from './LoginScreen';

export default function LoginRequired({ children }) {
  const loggedIn = useContext(AuthContext);

  if (loggedIn) {
    return <>{children}</>;
  } else {
    return <LoginScreen />;
  }
}
