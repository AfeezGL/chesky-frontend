import { DoorIcon, TransmissionIcon, WifiIcon } from '@/assets/cars';

export default function CarFeatures({ transmission, doors, connected }) {
  return (
    <div className='grid grid-cols-3 gap-5 text-dark-400 font-normal'>
      <div className='flex flex-col gap-3 items-center'>
        <TransmissionIcon />
        <p>{transmission}</p>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <WifiIcon />
        <p>{connected ? 'Yes' : 'No'}</p>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <DoorIcon />
        <p>{doors}</p>
      </div>
    </div>
  );
}
