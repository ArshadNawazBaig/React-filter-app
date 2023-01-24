import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const contains = [
  { name: 'Africa', id: 1 },
  { name: 'Pakistan', id: 2 },
  { name: 'India', id: 3 },
];

const CheckBoxFilter = () => {
  const [checked, setChecked] = useState([]);

  const handleTogle = (value) => {
    const currentIndex = checked.indexOf(value);
    console.log(value, checked);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div>
      {contains.map((contain) => (
        <Checkbox
          onChecked={handleTogle}
          key={contain.id}
          id={contain.id}
          checked={checked.indexOf(contain.id) === -1 ? false : true}
        />
      ))}
    </div>
  );
};

export default CheckBoxFilter;
