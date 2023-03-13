export default function Option({ option }) {
  return (
    <div className='flex gap-2 py-1'>
      <input
        type='checkbox'
        name={option.name}
        id={option.name}
        className='appearance-none w-5 h-5 border-2 border-blue rounded checked:bg-blue'
      />{' '}
      <span>{option.name}</span>
    </div>
  );
}
