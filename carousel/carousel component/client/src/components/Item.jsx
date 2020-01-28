import React from 'react';

function Item ({name, image, category, rating}){
  return (
    <div>
      <img src={image}></img>
      <span>{name}</span><br></br>
      <span>{rating}</span>
    </div>

    
  )
}

export default Item;