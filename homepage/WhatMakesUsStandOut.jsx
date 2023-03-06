import HandLensImage from '@/assets/homepage/hiddenfees.png';
import RentalsImage from '@/assets/homepage/rentals.png';
import Attribute from './partials/Attribute';

const uniqueAttributes = [
  {
    id: 2,
    title: 'No hidden fees',
    details: "Know exactly what you're paying",
    color: 'yellow',
    image: HandLensImage,
  },
  {
    id: 3,
    title: 'Flexible Rentals',
    details: "Found the same deal for less? We'll match the price.",
    color: 'blue-light',
    image: RentalsImage,
  },
];

export default function WhatMakesUsStandOut() {
  return (
    <div className='mt-28'>
      <h2 className='text-center text-blue capitalize font-extrabold text-4xl pb-12'>
        what makes us stand out
      </h2>
      <div className={`grid grid-cols-${uniqueAttributes.length} gap-3`}>
        {uniqueAttributes.map((attribute) => (
          <Attribute attribute={attribute} key={attribute.id} />
        ))}
      </div>
    </div>
  );
}
