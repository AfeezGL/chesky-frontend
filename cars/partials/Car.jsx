import Image from 'next/image';
import Link from 'next/link';
import CarFeatures from './Carfeatures';

export default function Car({ car }) {
  return (
    <div className='flex gap-6 bg-chesky-gray bg-opacity-5 rounded-xl mb-5 last-of-type:mb-0'>
      <Image src={car.image} alt={car.name} />
      <div className='grow flex justify-between'>
        <div>
          <p className='text-blue font-bold text-xl py-5'>{car.name}</p>
          <CarFeatures />
        </div>
        <div className='flex gap-4 flex-col justify-center items-center px-6'>
          <div className='text-blue text-center'>
            <span className='block'>Price:</span>
            <strong className='text-3xl font-normal'>
              {car.price.toLocaleString('en-us', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
              })}
            </strong>
          </div>
          <Link
            href={`/cars/${car.id}`}
            className='bg-blue py-3 px-14 text-white text-lg rounded-lg'
          >
            Rent
          </Link>
        </div>
      </div>
    </div>
  );
}
