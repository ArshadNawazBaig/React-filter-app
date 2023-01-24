import React from 'react';

const Checkbox = ({ checked, onChecked, id }) => {
  return (
    <input type="checkbox" checked={checked} onChange={() => onChecked(id)} />
  );
};

export default Checkbox;
