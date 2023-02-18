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
        <p>
          {charges.days} X {charges.rate}
        </p>
        <p>{currency(charges.days * charges.rate)}</p>
      </div>
      <div className='flex justify-between py-1'>
        <p>taxes and fees</p>
        <p>{currency(charges.taxes)}</p>
      </div>
      <div className='flex justify-between py-1'>
        <p>due now</p>
        <p>{currency(charges.dueNow)}</p>
      </div>
      <div className='flex justify-between py-1'>
        <p>due at pickup</p>
        <p>{currency(charges.dueAtPickup)}</p>
      </div>
      <div className='flex justify-between py-1 font-bold'>
        <p>total</p>
        <p>{currency(charges.total)}</p>
      </div>
    </section>
  );
}
