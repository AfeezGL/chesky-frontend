import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axiosClient from '@/utils/axios';
import CarDetailsScreen from '@/cars/CarDetailsScreen';

export default function CarDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, isSuccess, isError, data, error } = useQuery(
    ['car'],
    async () => {
      const res = await axiosClient.get(`/car/${id}`);
      return await res.data;
    },
    { enabled: !!id }
  );

  return (
    <>
      {isLoading && 'Loading...'}
      {isSuccess && data.data ? <CarDetailsScreen car={data.data} /> : null}
      {isSuccess && !data.data
        ? "The car you're looking for is no longer available."
        : null}
    </>
  );
}
