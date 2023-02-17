import SearchBar from '@/components/SearchBar';
import SideBar from '@/sidebar/SideBar';

export default function Index() {
  return (
    <>
      <SearchBar />
      <div className='py-10 sm:flex sm:gap-8'>
        <SideBar />
      </div>
    </>
  );
}
