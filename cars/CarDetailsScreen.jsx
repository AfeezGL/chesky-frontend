import Car from '@/cars/partials/Car';
import CarDetails from './partials/CarDetails';
import SummaryOfCharges from './partials/SummaryOfCharges';
import RentalDisclaimer from './RentalDisclaimer';

export default function CarDetailsScreen({ car }) {
  return (
    <section
      aria-label='Car details'
      className='flex gap-9 flex-col sm:flex-row'
    >
      <div className='sm:basis-2/3'>
        <Car car={car} showPrice={false} />
        <div className='max-w-md'>
          <CarDetails details={car.category} />
        </div>
      </div>
      <div className='sm:basis-1/3'>
        <div className='sm:mb-16 lg:mb-28'>
          <SummaryOfCharges charges={car.rate_totals.pay_later} />
          <RentalDisclaimer />
        </div>
      </div>
    </section>
  );
}
