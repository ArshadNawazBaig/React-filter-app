import { useState } from 'react';
import { Card } from './components/Card';
import { Filter } from './components/Filter';
const products = [
  {
    id: 1,
    name: 'Apple',
    region: 'North America',
    status: 'Available',
    price: 20,
    category: 'Fruit',
    colors: ['red', 'green', 'yellow'],
  },
  {
    id: 2,
    name: 'Banana',
    region: 'South America',
    status: 'Available',
    price: 20,
    category: 'Fruit',
    colors: ['green', 'yellow', 'brown'],
  },
  {
    id: 3,
    name: 'Carrot',
    region: 'Europe',
    status: 'Available',
    price: 20,
    category: 'Vegetable',
    colors: ['orange', 'yellow', 'white'],
  },
];
function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  return (
    <div className="App">
      <Filter
        products={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      {filteredProducts.map((product) => (
        <>
          <Card
            image="./images/product.jpg"
            title={product.name}
            price={product.price}
          />
        </>
      ))}
    </div>
  );
}

export default App;
