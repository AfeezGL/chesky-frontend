import Filter from './Filter';

const filters = [
  {
    id: 1,
    name: 'Car specs',
    options: [
      { id: 1, name: 'Air Conditioning' },
      { id: 2, name: '4+ doors' },
      { id: 3, name: 'wifi' },
    ],
  },
  {
    id: 2,
    name: 'Car Company',
    options: [
      { id: 1, name: 'Avis' },
      { id: 2, name: 'Trifty' },
      { id: 3, name: 'Sixt' },
    ],
  },
  {
    id: 3,
    name: 'Car Size',
    options: [
      { id: 1, name: 'small' },
      { id: 2, name: 'medium' },
      { id: 3, name: 'large' },
    ],
  },
  {
    id: 4,
    name: 'Cancellation Policy',
    options: [
      { id: 1, name: 'Free Cancellation' },
      { id: 2, name: 'Flexible Cancellation' },
    ],
  },
];

export default function SideBar() {
  return (
    <section
      className='sm:bg-blue sm:bg-opacity-10 px-3 py-3 sm:w-[280px]'
      aria-label='Sidebar'
    >
      <div className='flex justify-between'>
        <h2 className='text-blue text-2xl font-bold'>Filter</h2>
        <button className='text-dark-100'>Clear all filters</button>
      </div>
      {filters.map((filter) => (
        <Filter catergory={filter} key={filter.id} />
      ))}
    </section>
  );
}
