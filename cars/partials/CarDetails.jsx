export default function CarDetails({ details }) {
  return (
    <div className='text-blue mb-5 mt-5 capitalize'>
      <h2 className='font-bold text-lg'>More details</h2>
      <div className='flex justify-between'>
        <p>car brand</p>
        <p>{details.make}</p>
      </div>
      <div className='flex justify-between'>
        <p>car model name</p>
        <p>{details.model}</p>
      </div>
    </div>
  );
}
