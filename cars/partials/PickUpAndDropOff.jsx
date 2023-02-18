export default function PickUpAndDropOff({ pickUp, dropOff }) {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between gap-5 bg-chesky-gray bg-opacity-5 rounded-xl mb-5 capitalize text-blue py-14 px-5'>
      <div className='max-w-xs'>
        <p className='uppercase'>pick-up</p>
        <p className='font-normal text-3xl'>{pickUp.time}</p>
        <p>{pickUp.location}</p>
      </div>
      <div className='max-w-xs'>
        <p className='uppercase'>drop-off</p>
        <p className='font-normal text-3xl'>{dropOff.time}</p>
        <p>{dropOff.location}</p>
      </div>
    </div>
  );
}
