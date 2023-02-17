import Image from 'next/image';

export default function Contact({ contact }) {
  return (
    <li className='flex gap-4 items-center pb-5'>
      <Image src={contact.icon} width={20} height={20} alt={contact.type} />
      <p className='text-blue font-light'>{contact.details}</p>
    </li>
  );
}
