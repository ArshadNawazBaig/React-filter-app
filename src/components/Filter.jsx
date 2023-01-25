import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import Checkbox from './Checkbox';
import { initialState, reducer, TYPES } from './state';
const Filter = ({
  products,
  handleSearch,
  search,
  handleCategory,
  constrains,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { region: myRegions } = state;
  const [uniqueOptions, setUniqueOptions] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setUniqueOptions([
        ...new Set(products.map((product) => product.category)),
      ]);
    }
  }, []);
  const toggleFunc = (value) => {
    dispatch({ type: TYPES.REGION, payload: value });
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search product"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <select onChange={(e) => handleCategory(e.target.value)}>
        {uniqueOptions.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="checkbox"
        name="Free"
        onChange={(e) => console.log(e.target.checked)}
      />
      <div>
        {myRegions}
        {constrains.map((region, i) => (
          <Checkbox
            onChecked={toggleFunc}
            checked={
              myRegions.indexOf(region.name.toLowerCase()) === -1 ? false : true
            }
            id={region.name.toLowerCase()}
            key={i + region}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
