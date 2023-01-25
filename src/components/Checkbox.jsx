import React from 'react';

const Checkbox = ({ checked, onChecked, label }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChecked(label)}
      />
    </>
  );
};

export default Checkbox;
