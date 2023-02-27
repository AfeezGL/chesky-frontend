import Link from 'next/link';

export default function Offer({ offer }) {
  return (
    <Link
      href={`/cars/${offer._id}`}
      className='relative text-center aspect-square'
    >
      <img
        src={offer.category.image_url}
        alt='offer'
        className='w-full h-full object-contain'
      />
      <strong className='absolute top-0 right-0 text-brand-blue pt-3 text-lg uppercase font-normal italic'>
        {offer.brand}
      </strong>
      <strong className='absolute bottom-0 left-0 text-brand-blue text-center w-full'>{`${offer.category.make} ${offer.category.model}`}</strong>
    </Link>
  );
}
