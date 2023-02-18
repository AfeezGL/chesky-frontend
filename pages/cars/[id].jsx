import CarImg from '@/assets/cars/car-img.svg';
import Car from '@/cars/partials/Car';
import { useRouter } from 'next/router';

export default function CarDetails() {
  const router = useRouter();
  const { id } = router.query;
  const car = { id, name: 'Toyota Corolla', image: CarImg, price: 40 };
  return (
    <section
      aria-label='Car details'
      className='flex gap-9 flex-col sm:flex-row'
    >
      <div className='sm:basis-2/3'>
        <Car car={car} showPrice={false} />
      </div>
      <div>cost section</div>
    </section>
  );
}
