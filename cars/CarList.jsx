import axiosClient from '@/utils/axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import Car from './partials/Car';

export default function CarList() {
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

  return (
    <div className='px-3 sm:px-0 w-full'>
      {isLoading && 'Loading...'}
      {isError && <div>Failed to load</div>}
      {isSuccess && data.data.map((car) => <Car car={car} key={car.id} />)}
    </div>
  );
}
