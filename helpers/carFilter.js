/**
  carsInterfaceExample =
    {
      _id: 'string',
      category: {
        name: string,
        ...
      },
      features: {
        bluetooth_equipped: bool,
        smoke_free: bool,
        air_conditioned: bool,
        connected_car: bool,
      },
      capacity: {
        doors: sting,
        seats: string,
        mpg: string,
        ...
      },
      rate_totals: {...},
      brand: string,
      ...
    }
*/

export const filterAttributes = {
  FEATURE: 'feature',
  BRAND: 'brand',
  CAPACITY: 'capacity',
};

export const filterOptions = [
  {
    id: 1,
    name: 'Car specs',
    single: false,
    options: [
      {
        id: 1,
        name: 'Air Conditioning',
        filter: { type: filterAttributes.FEATURE, value: 'air_conditioned' },
      },
      {
        id: 2,
        name: '4+ doors',
        filter: { type: filterAttributes.CAPACITY, value: 'doors:4' },
      },
      {
        id: 3,
        name: 'Connected car',
        filter: { type: filterAttributes.FEATURE, value: 'connected_car' },
      },
    ],
  },
  {
    id: 2,
    name: 'Car Company',
    single: true,
    options: [
      {
        id: 1,
        name: 'Avis',
      },
      {
        id: 2,
        name: 'Budget',
      },
      {
        id: 3,
        name: 'Paylater',
      },
    ],
  },
];

const getCarsWithAttribute = (cars, attribute) => {
  switch (attribute.type) {
    case filterAttributes.BRAND:
      return cars.filter(
        (car) => car.brand.toLowerCase() === attribute.value.toLowerCase()
      );

    case filterAttributes.FEATURE:
      return cars.filter((car) => car.features[attribute.value] === true);

    case filterAttributes.CAPACITY:
      return cars.filter(
        (car) =>
          parseInt(car.capacity[attribute.value.split(':')[0]]) >=
          parseInt(attribute.value.split(':')[1] * 1)
      );

    default:
      return [];
  }
};

export const filterCars = (cars, filterAttributes) => {
  filterAttributes.forEach(
    (attribute) => (cars = getCarsWithAttribute(cars, attribute))
  );
  return cars;
};
