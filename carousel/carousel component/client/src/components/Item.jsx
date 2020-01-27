import React from 'react';

function Item ({name, image, category, rating}){
  return (
    <div>
      <span>{name}</span>
      <img src={image}></img>
      <span>{rating}</span>
    </div>

    
  )
}

export default Item;