import { filterAttributes } from '@/helpers/carFilter';
import { actions } from '@/reducers/filterReducer';
import { useState } from 'react';

export default function SingleSelect({ options, dispatch }) {
  const [prevSelected, setPrevSelect] = useState('');

  const handleChange = (e) => {
    if (e.target.value && prevSelected) {
      dispatch({
        type: actions.REMOVE_FILTER,
        payload: { type: filterAttributes.BRAND, value: prevSelected },
      });

      dispatch({
        type: actions.ADD_FILTER,
        payload: { type: filterAttributes.BRAND, value: e.target.value },
      });
    } else if (e.target.value && !prevSelected) {
      dispatch({
        type: actions.ADD_FILTER,
        payload: { type: filterAttributes.BRAND, value: e.target.value },
      });
    } else if (!e.target.value && prevSelected) {
      dispatch({
        type: actions.REMOVE_FILTER,
        payload: { type: filterAttributes.BRAND, value: prevSelected },
      });
    }

    setPrevSelect(e.target.value);
  };

  return (
    <select
      name='country'
      id='country'
      onChange={handleChange}
      value={prevSelected}
    >
      <option value={''}>All</option>
      {options.map((filterOption) => (
        <option key={filterOption.id} value={filterOption.name}>
          {filterOption.name}
        </option>
      ))}
    </select>
  );
}
