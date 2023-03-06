import Facebook from '@/assets/layout/facebook.svg';
import Instagram from '@/assets/layout/insta.svg';
import LinkedIn from '@/assets/layout/linkedin.svg';
import LogoDark from '@/assets/layout/logo-dark.png';
import Twitter from '@/assets/layout/twitter.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center gap-5 bg-dark-300 text-white px-4 pt-5 pb-4 text-center'>
      <Image src={LogoDark} alt='Chesky' />
      <p>
        Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque porttitor
        nunc pharetra tempus venenatis. Magnis tortor a massa arcu viverra
        fermentum. Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque
        porttitor nunc pharetra tempus venenatis. Magnis tortor a massa arcu
        viverra fermentum. Lorem ipsum dolor sit amet consectetur. Faucibus
        scelerisque porttitor nunc pharetra tempus venenatis. Magnis tortor a
        massa arcu viverra fermentum.
      </p>
      <h2 className='text-md font-bold'>Socials</h2>
      <div className='flex flex-row gap-4'>
        <Image src={LinkedIn} alt='LinkedIn' />
        <Image src={Instagram} alt='Instagram' />
        <Image src={Facebook} alt='Facebook' />
        <Image src={Twitter} alt='Twitter' />
      </div>
      <p className='text-sm font-light text-pink'>
        &copy; All Rights Reserved By chesky
      </p>
    </footer>
  );
}
