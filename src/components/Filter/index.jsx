import React, { useState } from 'react';

export const Filter = ({ products, setFilteredProducts }) => {
  console.log(products);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedColors, setSelectedColors] = useState([]);
  const colors = ['red', 'green', 'yellow'];

  const filterProducts = () => {
    let filteredProducts = [...products];
    if (searchValue) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (selectedCategory && selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          filterProducts();
        }}
      />

      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          filterProducts();
        }}
      >
        <option value="all">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      <div>
        {colors.map((color) => (
          <div>
            <input
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedColors([...selectedColors, e.target.value]);
                } else {
                  setSelectedColors(
                    selectedColors.filter((c) => c !== e.target.value)
                  );
                }
                filterProducts();
              }}
            />
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};
