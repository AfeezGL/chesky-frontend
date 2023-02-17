import Exit from '@/assets/layout/exit.svg';
import Hambuger from '@/assets/layout/hambuger.svg';
import LogoLight from '@/assets/layout/logo-light.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLinks from './NavLinks';

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto px-4 py-4 lg:container'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-between'>
            <div className='flex items-center'>
              <Image src={LogoLight} width={92} height={53} alt='Chesky' />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <NavLinks />
              </div>
            </div>

            <Link
              href={'/cars'}
              className='bg-blue py-3 px-9 rounded-lg text-white text-lg hidden sm:block'
            >
              Rent a car
            </Link>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='bg-blue inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setNavOpen(!navOpen)}
            >
              <Image
                src={Exit}
                className={`${!navOpen ? 'hidden' : 'block'}  h-6 w-6`}
                alt='Close navigation'
              />
              <Image
                src={Hambuger}
                alt='Open navigation'
                className={`${!navOpen ? 'block' : 'hidden'} h-6 w-6`}
              />
            </button>
          </div>
        </div>
      </div>

      {navOpen && (
        <div className='sm:hidden px-6 pb-5' id='mobile-menu'>
          <div className='flex flex-col gap-5'>
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
}
