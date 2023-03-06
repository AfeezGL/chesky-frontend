import HeroImage from '@/assets/homepage/hero-image.png';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className='flex items-center flex-col md:flex-row pt-5 md:pt-0'>
      <div className='hero-text'>
        <h1 className='text-blue text-4xl md:text-5xl lg:text-6xl font-extrabold capitalize'>
          Rent a car without stress
        </h1>
        <p className='text-dark-100'>
          Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque porttitor
          nunc pharetra tempus venenatis. Magnis tortor a massa arcu viverra
          fermentum.
        </p>
      </div>
      <div className='hero-image self-end'>
        <Image src={HeroImage} alt='car' />
      </div>
    </header>
  );
}
