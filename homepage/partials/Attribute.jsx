import Image from 'next/image';

export default function Attribute({ attribute }) {
  return (
    <div
      className={`flex flex-col p-4 rounded-xl justify-center items-center ${
        attribute.color == 'yellow'
          ? 'bg-yellow'
          : attribute.color == 'pink'
          ? 'bg-pink'
          : 'bg-blue-light'
      }`}
    >
      <Image
        src={attribute.image}
        alt='flexible rentals'
        width={82}
        height={82}
      />
      <strong className='text-white capitalize text-center font-bold text-base sm:text-2xl'>
        {attribute.title}
      </strong>
      <p className='capitalize text-white text-center'>{attribute.details}</p>
    </div>
  );
}
