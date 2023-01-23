import React, { useEffect } from 'react';
import { useState } from 'react';

const Filter = ({ products, handleSearch, search, handleCategory }) => {
  const [uniqueOptions, setUniqueOptions] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setUniqueOptions([
        ...new Set(products.map((product) => product.category)),
      ]);
    }
  }, []);

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
    </div>
  );
};

export default Filter;
