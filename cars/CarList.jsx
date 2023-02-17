import CarImg from '@/assets/cars/car-img.svg';
import Car from './partials/Car';

const carlist = [
  { id: 1, name: 'Toyota Corolla', image: CarImg, price: 40 },
  { id: 2, name: 'Toyota Corolla', image: CarImg, price: 40 },
  { id: 3, name: 'Toyota Corolla', image: CarImg, price: 40 },
  { id: 4, name: 'Toyota Corolla', image: CarImg, price: 40 },
  { id: 5, name: 'Toyota Corolla', image: CarImg, price: 40 },
];
export default function CarList() {
  return (
    <div className='px-3 sm:px-0 w-full'>
      {carlist.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </div>
  );
}
