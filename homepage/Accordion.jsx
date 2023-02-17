import CloseIcon from '@/assets/buttons/close.svg';
import OpenIcon from '@/assets/buttons/open.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border-blue border-2 rounded-2xl p-8 transition ease-in-out duration-150'>
      <div className='relative'>
        <p className='font-medium text-blue text-lg pr-10 pb-6'>{question}</p>
        <button
          className='absolute right-0 top-0'
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <Image src={OpenIcon} width={40} height={40} alt='Open' />
          ) : (
            <Image src={CloseIcon} width={40} height={40} alt='Open' />
          )}
        </button>
      </div>
      {isOpen && (
        <p className='pr-10 capitalize text-sm font-normal'>{answer}</p>
      )}
    </div>
  );
}
