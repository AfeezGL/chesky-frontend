import AlamoLogo from '@/assets/homepage/alamo.png';
import BidvestLogo from '@/assets/homepage/bidvest.png';
import CarhireLogo from '@/assets/homepage/carhire.png';
import DollarLogo from '@/assets/homepage/dollar.png';
import EuropcarLogo from '@/assets/homepage/europcar.png';
import SixtLogo from '@/assets/homepage/sixt.png';
import ThriftyLogo from '@/assets/homepage/thrifty.png';
import Image from 'next/image';

const partners = [
  { id: 1, name: 'Thrifty', logo: ThriftyLogo },
  { id: 2, name: 'Alamo', logo: AlamoLogo },
  { id: 3, name: 'Bidvest', logo: BidvestLogo },
  { id: 4, name: 'Dollar', logo: DollarLogo },
  { id: 5, name: 'Bidvest', logo: BidvestLogo },
  { id: 6, name: 'Carhire', logo: CarhireLogo },
  { id: 7, name: 'Sixt', logo: SixtLogo },
  { id: 8, name: 'Europcar', logo: EuropcarLogo },
];

export default function PartnersSection() {
  return (
    <section className='text-center mt-28 mx-auto' aria-label='Partners'>
      <h2 className='capitalize text-blue font-extrabold text-4xl'>
        Connecting you to the biggest brands in car rental
      </h2>
      <div className='grid grid-cols-4 md:grid-cols-8 py-10'>
        {partners.map((partner) => (
          <Image
            src={partner.logo}
            width={100}
            height={50}
            alt={partner.name}
            key={partner.id}
          />
        ))}
      </div>
    </section>
  );
}
