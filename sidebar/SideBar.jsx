import { filterOptions } from '@/helpers/carFilter';
import Filter from './Filter';

export default function SideBar({ dispatch }) {
  return (
    <section
      className='hidden sm:block sm:bg-blue sm:bg-opacity-10 px-3 py-3 sm:w-[280px]'
      aria-label='Sidebar'
    >
      <div className='flex justify-between'>
        <h2 className='text-blue text-2xl font-bold'>Filter</h2>
      </div>
      {filterOptions.map((filter) => (
        <Filter category={filter} key={filter.id} dispatch={dispatch} />
      ))}
    </section>
  );
}
