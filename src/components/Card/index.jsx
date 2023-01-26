import React from 'react';
import { Button } from '../Button';

export const Card = ({ image, title, price, onBuy }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.price}>${price}</div>
      <Button onClick={onBuy}>Buy Now</Button>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '300px',
    margin: '10px',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    height: '200px',
    objectFit: 'cover',
  },
  title: {
    margin: '10px 0',
  },
  price: {
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 20px',
    background: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    marginTop: '10px',
    cursor: 'pointer',
  },
};
