import CarDetailsScreen from '@/cars/CarDetailsScreen';
import Car from '@/cars/partials/Car';
import SearchBar from '@/components/SearchBar';
import SideBar from '@/sidebar/SideBar';
import axiosClient from '@/utils/axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

export default function Index() {
  const [showCarDetails, setShowCarDetails] = useState(false);
  const router = useRouter();
  const { pickupDateTime, dropOffDateTime, pickupLocation } = router.query;

  const mutation = useMutation(async (payload) => {
    const res = await axiosClient.post('/search', payload);

    return await res.data;
  });
  const { isLoading, isSuccess, isError, data } = mutation;

  useEffect(() => {
    if (pickupDateTime && dropOffDateTime && pickupLocation && window) {
      mutation.mutate({
        pickupDateTime,
        dropOffDateTime,
        pickupLocation,
      });
    }
  }, [pickupDateTime, dropOffDateTime, pickupLocation]);

  const handleShowCarDetails = () => {
    setShowCarDetails(true);
  };

  if (showCarDetails) return <CarDetailsScreen />;

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
                handleShowCarDetails={handleShowCarDetails}
              />
            ))}
        </div>
      </div>
    </>
  );
}
