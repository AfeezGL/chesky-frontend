import CarDetailsScreen from '@/cars/CarDetailsScreen';
import Car from '@/cars/partials/Car';
import SearchBar from '@/components/SearchBar';
import SideBar from '@/sidebar/SideBar';
import axiosClient from '@/utils/axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Toastify from 'toastify-js';

export default function Index() {
  const router = useRouter();
  const { pickupDateTime, dropOffDateTime, pickupLocation, country_code } =
    router.query;
  const [showCarDetails, setShowCarDetails] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);

  const { isLoading, isSuccess, isError, data, error } = useQuery(
    ['cars'],
    async () => {
      const res = await axiosClient.post('/search', {
        pickupDateTime,
        dropOffDateTime,
        pickupLocation,
        country_code,
      });
      return await res.data;
    },
    {
      enabled:
        !!pickupDateTime &&
        !!dropOffDateTime &&
        !!pickupLocation &&
        !!country_code &&
        !!window,
    }
  );

  useEffect(() => {
    if (error)
      Toastify({
        text: error,
        duration: 3000,
      }).showToast();
  }, [error]);

  return (
    <>
      <SearchBar />
      <div className='py-10 sm:flex sm:gap-8'>
        <SideBar />
        <div className='px-3 sm:px-0 w-full'>
          {isLoading && 'Loading...'}
          {isError && <div>Failed to load</div>}
          {isSuccess && data.data.map((car) => <Car car={car} key={car._id} />)}
        </div>
      </div>
    </>
  );
}
