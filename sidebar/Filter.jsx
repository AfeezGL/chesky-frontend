import Option from './Option';

export default function Filter({ catergory }) {
  return (
    <div>
      <h3 className='text-blue font-normal text-xl py-2'>{catergory.name}</h3>
      <form action='' className='px-2'>
        {catergory.options.map((option) => (
          <Option option={option} key={option.id} />
        ))}
      </form>
    </div>
  );
}
