import Option from './Option';
import SingleSelect from './SingleSelect';

export default function Filter({ category, dispatch }) {
  return (
    <div>
      <h3 className='text-blue font-normal text-xl py-2'>{category.name}</h3>
      <form action='' className='px-2'>
        {category.single ? (
          <SingleSelect options={category.options} dispatch={dispatch} />
        ) : (
          category.options.map((option) => (
            <Option option={option} key={option.id} dispatch={dispatch} />
          ))
        )}
      </form>
    </div>
  );
}
