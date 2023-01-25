import axios from 'axios';
import { useReducer, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import { initialState, reducer, TYPES } from './components/state';
const constrains = [
  { name: 'Africa', id: 1 },
  { name: 'Pakistan', id: 2 },
  { name: 'India', id: 3 },
];
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { search, ratting, category, products } = state;

  const handleSearch = (payload) => {
    dispatch({ type: TYPES.SEARCH, payload });
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: TYPES.PRODUCTS, payload: filteredData });
  };

  const handleCategory = (payload) => {
    const filteredData = products.filter(
      (product) => product.category === payload
    );
    dispatch({ type: TYPES.PRODUCTS, payload: filteredData });
  };

  return (
    <div className="App">
      <Filter
        products={products}
        search={search}
        handleSearch={handleSearch}
        handleCategory={handleCategory}
        constrains={constrains}
      />
      {products.map(({ id, title, price }) => (
        <div className="" key={id}>
          <p>{title}</p>
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
