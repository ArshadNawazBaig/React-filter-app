import React from 'react';

export const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button
      style={{
        ...styles.button,
        ...styles[variant],
        ...styles.hover,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  primary: {
    background: 'blue',
    color: 'white',
  },
  secondary: {
    background: 'white',
    color: 'blue',
    border: '2px solid blue',
  },
  success: {
    background: 'green',
    color: 'white',
  },
  danger: {
    background: 'red',
    color: 'white',
  },
  hover: {
    ':hover': {
      transform: 'scale(1.1)',
      boxShadow: '0px 0px 10px #ccc',
    },
  },
};
