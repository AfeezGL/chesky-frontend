import CarImg from '@/assets/cars/car-img.svg';
import Car from '@/cars/partials/Car';
import CarDetails from '@/cars/partials/CarDetails';
import PickUpAndDropOff from '@/cars/partials/PickUpAndDropOff';
import SummaryOfCharges from '@/cars/partials/SummaryOfCharges';
import RentalDisclaimer from '@/cars/RentalDisclaimer';
import { useRouter } from 'next/router';

export default function CarDetailsScreen() {
  const router = useRouter();
  const { id } = router.query;
  const car = {
    id,
    name: 'Toyota Corolla',
    image: CarImg,
    price: 40,
    details: { brand: 'toyota', model: 'corolla', color: 'blue' },
    pickUp: {
      time: 'Thu, Jan 26, 2023 7:00 AM',
      location: 'ogbomoso, Oyo state, Nigeria',
    },
    dropOff: {
      time: 'Thu, Jan 30, 2023 7:00 AM',
      location: 'ogbomoso, Oyo state, Nigeria',
    },
    charges: {
      days: 1,
      rate: 151.5,
      taxes: 5,
      dueNow: 0,
      dueAtPickup: 156.5,
      total: 156.5,
    },
  };

  return (
    <section
      aria-label='Car details'
      className='flex gap-9 flex-col sm:flex-row'
    >
      <div className='sm:basis-2/3'>
        <Car car={car} showPrice={false} />
        <div className='max-w-md'>
          <CarDetails details={car.details} />
        </div>
        <PickUpAndDropOff pickUp={car.pickUp} dropOff={car.dropOff} />
      </div>
      <div className='sm:basis-1/3'>
        <div className='sm:mb-16 lg:mb-28'>
          <SummaryOfCharges charges={car.charges} />
          <RentalDisclaimer />
        </div>
      </div>
    </section>
  );
}
