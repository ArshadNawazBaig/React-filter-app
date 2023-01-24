import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const contains = [
  { name: 'Africa', id: 1 },
  { name: 'Pakistan', id: 2 },
  { name: 'India', id: 3 },
];

const CheckBoxFilter = () => {
  const [checked, setChecked] = useState([1, 2, 3]);

  const handleTogle = (value) => {
    const currentIndex = checked.indexOf(value);
    console.log(currentIndex);
  };
  return (
    <div>
      <Checkbox onChecked={handleTogle} />
    </div>
  );
};

export default CheckBoxFilter;
