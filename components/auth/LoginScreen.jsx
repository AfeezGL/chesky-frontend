import { auth } from '@/utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Toastify from 'toastify-js';

export default function LoginScreen() {
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
    <div className='flex justify-center items-center h-[80vh] w-full'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-full max-w-lg gap-2 rounded shadow-md p-4'
      >
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='rounded p-2 border-2 border-gray'
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='rounded p-2 border-2 border-gray'
        />
        <input
          type='submit'
          value='Login'
          className='bg-blue p-2 rounded text-white'
        />
      </form>
    </div>
  );
}
