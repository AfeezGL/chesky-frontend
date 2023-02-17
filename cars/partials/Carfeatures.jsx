import {
  DoorIcon,
  MileageIcon,
  PetrolIcon,
  TransmissionIcon,
  WifiIcon,
} from '@/assets/cars';

const features = [
  { id: 1, icon: <MileageIcon />, details: 2000 },
  { id: 2, icon: <PetrolIcon />, details: 'Petrol' },
  { id: 3, icon: <TransmissionIcon />, details: 'Manual' },
  { id: 4, icon: <WifiIcon />, details: 'Wifi' },
  { id: 5, icon: <DoorIcon />, details: 4 },
];

export default function CarFeatures() {
  return (
    <div className='grid grid-cols-3 gap-5 text-dark-400 font-normal'>
      {features.map((feature) => (
        <div className='flex flex-col gap-3 items-center' key={feature.id}>
          {feature.icon}
          <p>{feature.details}</p>
        </div>
      ))}
    </div>
  );
}
