import { actions } from '@/reducers/carReducer';

export default function Option({ option, dispatch }) {
  return (
    <div className='flex gap-2 py-1'>
      <input
        onChange={(e) =>
          e.target.checked
            ? dispatch({ type: actions.ADD_FILTER, payload: option.filter })
            : dispatch({ type: actions.REMOVE_FILTER, payload: option.filter })
        }
        type='checkbox'
        name={option.name}
        id={option.name}
        className='appearance-none w-5 h-5 border-2 border-blue rounded checked:bg-blue'
      />{' '}
      <span>{option.name}</span>
    </div>
  );
}
