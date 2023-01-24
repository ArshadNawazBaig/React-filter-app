import React from 'react';

const Checkbox = ({ checked, onChecked }) => {
  return <input type="checkbox" checked={checked} onChange={onChecked} />;
};

export default Checkbox;
