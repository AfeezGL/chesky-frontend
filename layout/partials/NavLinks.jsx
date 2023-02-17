import Link from 'next/link';

const links = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'FAQs', href: '/#faq' },
  { id: 3, text: 'Contact Us', href: '/#contact-us' },
];

function NavLink({ link }) {
  return (
    <Link href={link.href} className='text-dark-100 font-normal text-xl'>
      {link.text}
    </Link>
  );
}

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <NavLink link={link} key={link.id} />
      ))}
    </>
  );
}
