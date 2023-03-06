import MailIcon from '@/assets/homepage/mail.svg';
import PhoneIcon from '@/assets/homepage/phone.svg';
import ContactForm from './ContactForm';
import Contact from './partials/Contact';

const contactDetails = [
  { id: 1, icon: PhoneIcon, details: '12345678890', type: 'Phone number' },
  { id: 2, icon: MailIcon, details: 'chesky@gmail.com', type: 'Email' },
];

export default function ContactUsSection() {
  return (
    <section className='mt-16 mb-24' id='contact-us' aria-label='Contact us'>
      <h2 className='font-bold text-blue text-3xl text-center capitalize pb-14'>
        Get in touch today
      </h2>
      <div className='flex flex-col justify-center items-center lg:flex-row md:justify-between'>
        <div className='pb-5 px-6 md:max-w-2xl lg:max-w-sm'>
          <div className='flex flex-col items-center pb-5 lg:items-start'>
            <strong className='capitalize text-blue text-lg font-bold pt-3 text-center md:text-left leading-7'>
              have feedback for us, drop a message
            </strong>
            <p className='text-xs font-normal text-dark-200 leading-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget.
            </p>
          </div>
          <ul className='list-none  max-w-sm'>
            {contactDetails.map((contact) => (
              <Contact contact={contact} key={contact.id} />
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
