import React from 'react';

function Item ({name, image, category, rating, addClass}){
  return (
    <div className={'singleItem' + (addClass? ' transform' : '')}>
      <img src={image}></img>
      <span>{name}</span><br></br>
      <span>{rating}</span>
    </div>
  )
}

export default Item;