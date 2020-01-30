import React from 'react';

function Item ({name, image, category, rating}){
  return (
    <div className='singleItem'>
      <img src={image}></img>
      <span><b>{name}</b></span><br></br>
      <span>rating:{rating}</span>
    </div>
  )
}

export default Item;