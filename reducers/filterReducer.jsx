export const initialState = [];

export const actions = {
  ADD_FILTER: 'ADD_FILTER',
  REMOVE_FILTER: 'REMOVE_FILTER',
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_FILTER:
      return [...state, action.payload];
    case actions.REMOVE_FILTER:
      return state.filter((element) => element.value !== action.payload.value);
    default:
      return state;
  }
};

export default filterReducer;
