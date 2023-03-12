import { filterCars } from '@/helpers/carFilter';

export const initialState = {
  cars: [],
  filters: [],
  filteredCars: [],
};

export const actions = {
  UPDATE_CARS: 'UPDATE_CARS',
  FILTER: 'FILTER',
  ADD_FILTER: 'ADD_FILTER',
  REMOVE_FILTER: 'REMOVE_FILTER',
};

const carReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_CARS:
      return {
        ...state,
        cars: action.payload,
        filteredCars: action.payload,
      };
    case actions.FILTER:
      if (action.payload.length === 0) return state;
      return {
        ...state,
        filteredCars: filterCars(state.cars, action.payload),
      };
    case actions.ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };
    case actions.REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(
          (element) => element.value !== action.payload.value
        ),
      };
    default:
      return state;
  }
};

export default carReducer;
