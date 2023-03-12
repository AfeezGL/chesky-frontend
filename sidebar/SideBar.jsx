import { filterOptions } from '@/helpers/carFilter';
import { actions } from '@/reducers/carReducer';
import filterReducer, { initialState } from '@/reducers/filterReducer';
import { useEffect, useReducer } from 'react';
import Filter from './Filter';

export default function SideBar({ carDispatch }) {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    carDispatch({ type: actions.FILTER, payload: filters });
  }, [filters]);

  return (
    <section
      className='hidden sm:block sm:bg-blue sm:bg-opacity-10 px-3 py-3 sm:w-[280px]'
      aria-label='Sidebar'
    >
      <div className='flex justify-between'>
        <h2 className='text-blue text-2xl font-bold'>Filter</h2>
        <button className='text-dark-100'>Clear all filters</button>
      </div>
      {filterOptions.map((filter) => (
        <Filter category={filter} key={filter.id} dispatch={dispatch} />
      ))}
    </section>
  );
}
