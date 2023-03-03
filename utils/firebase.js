import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDesB7CkUHCMOyeCz0Ck7pZxe4xCH2eg8U',
  authDomain: 'chesky.firebaseapp.com',
  projectId: 'chesky',
  storageBucket: 'chesky.appspot.com',
  messagingSenderId: '1076827670847',
  appId: '1:1076827670847:web:5b048d4e19970999b12b8a',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
