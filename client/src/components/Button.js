import React from 'react';

const Button = ({ onClick }) => {
  return (
    <input type="button" value="Add to cart" onClick={onClick} />
  )
}

export default Button;