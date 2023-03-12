import { filterCars } from '@/helpers/carFilter';

export const initialState = { cars: [], filteredCars: [] };

export const actions = {
  UPDATE_CARS: 'UPDATE_CARS',
  FILTER: 'FILTER',
};

const carReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_CARS:
      return { cars: action.payload, filteredCars: action.payload };
    case actions.FILTER:
      if (action.payload.length === 0) return state;
      return { ...state, filteredCars: filterCars(state.cars, action.payload) };
    default:
      return state;
  }
};

export default carReducer;
