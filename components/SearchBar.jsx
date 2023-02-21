import FilterIcon from '@/assets/homepage/filter.svg';
import useDatesValid from '@/hooks/useDatesValid';
import Image from 'next/image';
import { useState } from 'react';

export default function SearchBar() {
  const [pickupDateTime, setPickupDateTime] = useState('');
  const [dropOffDateTime, setDropOffDateTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [datesValid] = useDatesValid(pickupDateTime, dropOffDateTime);

  return (
    <div className='border-blue border-2 rounded-xl mx-auto p-4'>
      <header className='text-blue font-semibold text-2xl pb-3 md:hidden'>
        Quick search
      </header>
      <form action='/cars' className='md:flex'>
        <div className='grid grid-cols-2 gap-2 md:flex md:basis-3/4'>
          <input
            type='text'
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40'
            placeholder='Country code'
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            name='country_code'
          />
          <input
            type='text'
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40'
            placeholder='Pick up location'
            name='pickupLocation'
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
          <input
            type='datetime-local'
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40'
            placeholder='Select pick up date'
            name='pickupDateTime'
            value={pickupDateTime}
            onChange={(e) => setPickupDateTime(e.target.value)}
            required
          />
          <input
            type='date'
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40'
            placeholder='Select drop off date'
            name='dropOffDateTime'
            value={dropOffDateTime}
            onChange={(e) => setDropOffDateTime(e.target.value)}
            required
          />
        </div>

        <div className='flex justify-center pt-6 md:pt-0 md:basis-1/4 md:justify-around'>
          <button type='button' className='hidden md:block'>
            <Image
              src={FilterIcon}
              width={35}
              height={35}
              alt='filter'
              className='self-center'
            />
          </button>
          <button
            disabled={!datesValid}
            type='submit'
            className='bg-blue px-10 py-3 rounded-md text-white font-semibold disabled:bg-blue-light'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
