import { auth } from '@/utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Toastify from 'toastify-js';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Toastify({
        text: error.message,
        duration: 3000,
      }).showToast();
    }
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <form onSubmit={handleSubmit} className='flex w-28'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};
