const conditions = [
  { id: 1, text: 'Review Age Restrictions.' },
  {
    id: 2,
    text: "The driver must present a valid driver's license and credit or debit card at the counter in his/her name. The use of a debit card may be subject to certain restrictions, or not permitted at some locations. Review the location's policy for details.",
  },
  {
    id: 3,
    text: "Review the location's policy for possible age or local renter restrictions.",
  },
];

export default function RentalDisclaimer() {
  return (
    <div className='py-7 px-4'>
      <h2 className='capitalize font-bold text-2xl py-4'>
        Important Information
      </h2>
      <div>
        <ul className='list-disc list-outside pl-5'>
          {conditions.map((condition) => (
            <li className='py-1' key={condition.id}>
              {condition.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
