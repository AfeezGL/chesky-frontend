import ThriftyLogo from '@/assets/homepage/thrifty.png';
import Offer from './partials/Offer';

const offers = [
  {
    id: 1,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
  {
    id: 2,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
  {
    id: 3,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
  {
    id: 4,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
  {
    id: 5,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
  {
    id: 6,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
  {
    id: 7,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
  {
    id: 8,
    car: 'Toyota corolla',
    company: 'thrifty',
    companyLogo: ThriftyLogo,
  },
];

export default function TopOffersSection() {
  return (
    <section className='mt-20 text-center mx-auto' aria-label='Top offers'>
      <h2 className='capitalize text-blue font-bold text-4xl mb-10'>
        Top offers for you
      </h2>
      <div className='w-full grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-4'>
        {offers.map((offer) => (
          <Offer offer={offer} key={offer.id} />
        ))}
      </div>
      <button className='bg-blue text-white font-normal text-lg rounded-lg px-9 py-3 mt-28'>
        see more
      </button>
    </section>
  );
}
