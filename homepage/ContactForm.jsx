export default function ContactForm() {
  return (
    <form action='' className='w-full shadow rounded-lg px-6 py-9 md:max-w-2xl'>
      <div className='flex gap-3 mb-4'>
        <div className='w-full'>
          <label
            htmlFor='first-name'
            className='text-blue capitalize text-xs font-normal mb-2'
          >
            First Name
          </label>
          <input
            type='text'
            name='first-name'
            placeholder='Ben'
            className='block w-full rounded-md border-2 border-gray-light p-3 text-xs'
          />
        </div>
        <div className='w-full'>
          <label
            htmlFor='last-name'
            className='text-blue capitalize text-xs font-normal mb-2'
          >
            Last Name
          </label>
          <input
            type='text'
            name='last-name'
            placeholder='Ajani'
            className='block w-full rounded-md border-2 border-gray-light p-3 text-xs'
          />
        </div>
      </div>
      <label
        htmlFor='email'
        className='text-blue capitalize text-xs font-normal mb-2'
      >
        E-mail
      </label>
      <input
        type='text'
        name='email'
        placeholder='Ajani'
        className='block w-full rounded-md border-2 border-gray-light p-3 text-xs mb-4'
      />
      <label
        htmlFor='message'
        className='text-blue capitalize text-xs font-normal mb-2'
      >
        Message
      </label>
      <textarea
        name='message'
        id='message'
        cols='30'
        rows='10'
        placeholder='Please type your message here...'
        className='block w-full rounded-xl border-2 border-gray-light p-3 text-xs mb-4'
      ></textarea>
      <button type='submit' className='bg-blue text-white py-2 px-7 rounded-md'>
        Contact Us
      </button>
    </form>
  );
}
