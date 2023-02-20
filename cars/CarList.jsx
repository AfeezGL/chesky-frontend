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
    return res.data;
  });

  const { isLoading, isSuccess, data, mutate } = mutation;

  useEffect(() => {
    mutate({
      pickupDateTime,
      dropOffDateTime,
      pickupLocation,
    });
  }, []);

  return (
    <div className='px-3 sm:px-0 w-full'>
      {isLoading && 'Loading...'}
      {isSuccess && data.data.map((car) => <Car car={car} key={car.id} />)}
    </div>
  );
}
