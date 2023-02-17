import Image from 'next/image';

export default function Offer({ offer }) {
  return (
    <div
      style={{
        aspectRatio: 1 / 1,
        backgroundImage: "url('/carbg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className='flex flex-col justify-between pb-4'
    >
      <div className='relative'>
        <Image
          src={offer.companyLogo}
          alt={offer.company}
          width={75}
          height={40}
          className='absolute right-0'
        />
      </div>
      <strong className='text-white'>{offer.car}</strong>
    </div>
  );
}
