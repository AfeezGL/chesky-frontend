import axiosClient from '@/utils/axios';
import moment from 'moment-business-time';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Offer from './partials/Offer';

export default function TopOffersSection() {
  const router = useRouter();
  const pickupDateTime = moment()
    .nextWorkingTime()
    .toJSON()
    .replace(/.\d+Z$/g, 'Z');
  const dropOffDateTime = moment()
    .addWorkingTime(3, 'days')
    .toJSON()
    .replace(/.\d+Z$/g, 'Z');
  const lat = '36.18811';
  const long = '115.176468';
  const country_code = 'US';
  const pickupLocation = 'California';

  const { data } = useQuery(['offers'], async () => {
    const res = await axiosClient.post('/search', {
      pickupDateTime,
      dropOffDateTime,
      lat,
      long,
      country_code,
      pickupLocation,
    });
    return await res.data;
  });

  if (!data) return null;

  return (
    <section className='mt-20 text-center mx-auto' aria-label='Top offers'>
      <h2 className='capitalize text-blue font-bold text-4xl mb-10'>
        Top offers for you
      </h2>
      <div className='w-full grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-4'>
        {data.data.map((offer) => (
          <Offer key={offer._id} offer={offer} />
        ))}
      </div>
      <button
        onClick={() =>
          router.push({
            pathname: '/cars',
            query: {
              pickupDateTime,
              dropOffDateTime,
              lat,
              long,
              country_code,
              pickupLocation,
            },
          })
        }
        className='bg-blue text-white font-normal text-lg rounded-lg px-9 py-3 mt-28'
      >
        see more
      </button>
    </section>
  );
}
