import Car from '@/cars/partials/Car';
import LoginRequired from '@/components/auth/LoginRequired';
import SearchBar from '@/components/SearchBar';
import carReducer, { actions, initialState } from '@/reducers/carReducer';
import SideBar from '@/sidebar/SideBar';
import axiosClient from '@/utils/axios';
import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import { useQuery } from 'react-query';
import Toastify from 'toastify-js';

export default function Index() {
  const router = useRouter();
  const { query } = router;
  const [state, dispatch] = useReducer(carReducer, initialState);
  const {
    pickupDateTime,
    dropOffDateTime,
    lat,
    long,
    country_code,
    pickupLocation,
  } = query;

  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    ['cars'],
    async () => {
      const res = await axiosClient.post('/search', {
        pickupDateTime,
        dropOffDateTime,
        lat,
        long,
        country_code,
        pickupLocation,
      });
      return await res.data;
    },
    {
      enabled:
        !!pickupDateTime &&
        !!dropOffDateTime &&
        !!lat &&
        !!long &&
        !!country_code &&
        !!pickupLocation &&
        !!window,
      staleTime: 600000,
    }
  );

  useEffect(() => {
    if (error)
      Toastify({
        text: error,
        duration: 3000,
      }).showToast();
  }, [error]);

  useEffect(() => {
    refetch();
  }, [query]);

  useEffect(() => {
    if (data?.data) {
      dispatch({ type: actions.UPDATE_CARS, payload: data.data });
    }
  }, [data]);

  useEffect(() => {
    dispatch({ type: actions.FILTER, payload: state.filters });
  }, [state.filters]);

  return (
    <LoginRequired>
      <SearchBar />
      <div className='py-10 sm:flex sm:gap-8'>
        <SideBar dispatch={dispatch} />
        <div className='px-3 sm:px-0 w-full'>
          {isLoading && 'Loading...'}
          {isError && <div>Failed to load</div>}
          {isSuccess && state.filteredCars
            ? state.filteredCars.map((car) => (
                <Car
                  car={car}
                  key={(Math.random() + 1).toString(36).substring(2)}
                />
              ))
            : null}
          {state.filters.length > 0 && state.filteredCars.length < 1
            ? 'No cars with the applied filters'
            : null}
        </div>
      </div>
    </LoginRequired>
  );
}
