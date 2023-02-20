import CarDetailsScreen from '@/cars/CarDetailsScreen';
import Car from '@/cars/partials/Car';
import SearchBar from '@/components/SearchBar';
import SideBar from '@/sidebar/SideBar';
import axiosClient from '@/utils/axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function Index() {
  const router = useRouter();
  const { pickupDateTime, dropOffDateTime, pickupLocation } = router.query;
  const [showCarDetails, setShowCarDetails] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);

  const { isLoading, isSuccess, isError, data } = useQuery(
    ['cars'],
    async () => {
      const res = await axiosClient.post('/search', {
        pickupDateTime,
        dropOffDateTime,
        pickupLocation,
      });
      return await res.data;
    },
    {
      enabled: !!pickupDateTime && !!dropOffDateTime && !!pickupLocation,
    }
  );

  const handleShowCarDetails = (car) => {
    setShowCarDetails(true);
    setCurrentCar(car);
  };

  const handleHideCarDetails = () => {
    setShowCarDetails(false);
    setCurrentCar(null);
  };

  if (showCarDetails)
    return (
      <CarDetailsScreen
        car={currentCar}
        handleHideCarDetails={handleHideCarDetails}
      />
    );

  return (
    <>
      <SearchBar />
      <div className='py-10 sm:flex sm:gap-8'>
        <SideBar />
        <div className='px-3 sm:px-0 w-full'>
          {isLoading && 'Loading...'}
          {isError && <div>Failed to load</div>}
          {isSuccess &&
            data.data.map((car) => (
              <Car
                car={car}
                key={car.id}
                handleShowCarDetails={() => handleShowCarDetails(car)}
              />
            ))}
        </div>
      </div>
    </>
  );
}
