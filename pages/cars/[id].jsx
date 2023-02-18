import CarImg from '@/assets/cars/car-img.svg';
import Car from '@/cars/partials/Car';
import CarDetails from '@/cars/partials/CarDetails';
import PickUpAndDropOff from '@/cars/partials/PickUpAndDropOff';
import { useRouter } from 'next/router';

export default function CarDetailsPage() {
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
      <div>cost section</div>
    </section>
  );
}
