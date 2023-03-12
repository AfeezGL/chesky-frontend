import CarFeatures from './Carfeatures';

export default function Car({ car, showPrice = true }) {
  return (
    <div className='flex gap-6 bg-chesky-gray bg-opacity-5 rounded-xl mb-5 last-of-type:mb-0'>
      <div className='relative w-[245px] h-[245px]'>
        <img
          src={car.category?.image_url}
          alt={`${car.category?.make} ${car.category?.model}`}
          className='object-contain h-full w-full'
        />
        <strong className='absolute top-0 right-0 text-brand-blue pt-3 text-lg uppercase font-normal italic'>
          {car.brand}
        </strong>
      </div>
      <div className='grow flex justify-between'>
        <div>
          <p className='text-blue font-bold text-xl py-5'>{`${car.category?.make} ${car.category?.model}`}</p>
          <CarFeatures
            transmission={car.category.vehicle_transmission}
            doors={car.capacity.doors}
            connected={car.features.connected_car}
          />
        </div>
        <div className='flex gap-4 flex-col justify-center items-center px-6'>
          {showPrice && (
            <>
              <div className='text-blue text-center'>
                <span className='block'>Price:</span>
                <strong className='text-3xl font-normal'>
                  {car.rate_totals?.pay_later?.reservation_total.toLocaleString(
                    'en-us',
                    {
                      style: 'currency',
                      currency: car.rate_totals?.rate?.currency,
                      minimumFractionDigits: 2,
                    }
                  )}
                </strong>
              </div>
              <a
                href={`/cars/${car._id}`}
                className='bg-blue py-3 px-14 text-white text-lg rounded-lg'
              >
                Rent
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
