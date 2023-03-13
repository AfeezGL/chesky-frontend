import FilterIcon from '@/assets/homepage/filter.svg';
import useValidateSearchForm from '@/hooks/useValidateSearchForm';
import { zipCodeClient } from '@/utils/axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AsyncSelect from 'react-select/async';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState(null);
  const [pickupDateTime, setPickupDateTime] = useState(new Date());
  const [dropOffDateTime, setDropOffDateTime] = useState(new Date());
  const [formValid] = useValidateSearchForm({
    pickupDateTime,
    dropOffDateTime,
  });

  const getLocationOptionsFromZipCode = async (inputValue) => {
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
        ...location.value,
        pickupDateTime: pickupDateTime.toJSON(),
        dropOffDateTime: dropOffDateTime.toJSON(),
      },
    });
  };

  return (
    <div className='border-blue border-2 rounded-xl mx-auto p-4'>
      <header className='text-blue font-semibold text-2xl pb-3 md:hidden'>
        Quick search
      </header>
      <form onSubmit={handleSubmit} className='md:flex'>
        <div className='grid grid-cols-2 gap-2 md:flex md:basis-3/4 md:items-center'>
          <AsyncSelect
            placeholder='Zip code'
            cacheOptions
            loadOptions={getLocationOptionsFromZipCode}
            onChange={setLocation}
            className='block w-full p-2 rounded-sm '
          />
          <input
            type='text'
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40 outline-none border-0'
            placeholder='Mile radius'
            name='mileRadius'
          />
          <DatePicker
            selected={pickupDateTime}
            onChange={(date) => setPickupDateTime(date)}
            showTimeSelect
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40 outline-none border-0'
            placeholderText='Pick up date'
            dateFormat='Pp'
          />
          <DatePicker
            selected={dropOffDateTime}
            onChange={(date) => {
              setDropOffDateTime(date);
            }}
            className='block w-full p-2 rounded-sm bg-gray-light bg-opacity-40 outline-none border-0'
            placeholderText='Drop off date'
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
