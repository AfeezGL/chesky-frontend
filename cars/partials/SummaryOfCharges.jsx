export default function SummaryOfCharges({ charges }) {
  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const currency = (amount) => currencyFormat.format(amount);

  return (
    <section
      className='text-blue bg-chesky-gray bg-opacity-5 rounded-xl mb-5 capitalize py-7 px-4'
      aria-labelledby='summaryOfCharges'
    >
      <h2 id='summaryOfCharges' className='text-xl font-normal'>
        Summary of Charges
      </h2>
      <div className='flex justify-between py-1'>
        <p>vehicle total</p>
        <p>{currency(charges.vehicle_total)}</p>
      </div>
      <div className='flex justify-between py-1 font-bold'>
        <p>reservation total</p>
        <p>{currency(charges.reservation_total)}</p>
      </div>
    </section>
  );
}
