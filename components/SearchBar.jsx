import FilterIcon from '@/assets/homepage/filter.svg';
import useValidateSearchForm from '@/hooks/useValidateSearchForm';
import { zipCodeClient } from '@/utils/axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';

export default function SearchBar() {
  const router = useRouter();
  const [zipCodeDetails, setZipCodeDetails] = useState(null);
  const [pickupDateTime, setPickupDateTime] = useState('');
  const [dropOffDateTime, setDropOffDateTime] = useState('');
  const [formValid] = useValidateSearchForm({
    pickupDateTime,
    dropOffDateTime,
  });

  const getZipCodeOptions = async (inputValue) => {
    const { data } = await zipCodeClient.get('', {
      params: {
        codes: inputValue,
        country: 'US',
      },
    });
    const options = data.results[inputValue].map((option) => ({
      label: `${option.city} ${option.state}, ${option.country_code}`,
      value: {
        lat: option.latitude,
        long: option.longitude,
        country_code: option.country_code,
        pickupLocation: option.city,
      },
    }));
    return options;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/cars',
      query: {
        ...zipCodeDetails.value,
        pickupDateTime,
        dropOffDateTime,
      },
    });
  };

  return (
    <div className='border-blue border-2 rounded-xl mx-auto p-4'>
      <header className='text-blue font-semibold text-2xl pb-3 md:hidden'>
        Quick search
      </header>
      <form onSubmit={handleSubmit} className='md:flex'>
        <div className='grid grid-cols-2 gap-2 md:flex md:basis-3/4'>
          <AsyncSelect
            placeholder='Zip code'
            cacheOptions
            loadOptions={getZipCodeOptions}
            onChange={setZipCodeDetails}
            className='block w-full p-2 rounded-sm '
          />
          <input
            type='text'
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40'
            placeholder='Mile radius'
            name='mileRadius'
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
            disabled={!formValid}
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
