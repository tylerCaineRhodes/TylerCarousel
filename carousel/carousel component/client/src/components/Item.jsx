import React from 'react';

function Item ({name, image, category, rating}){
  //refactor into class component
  //import star rating library
  //set the state to rating
  return (
    <div className='singleItem'>
      <img src={image}></img>
      <span id="itemName"><b>{name}</b></span>
      <span id="rating">rating--> {rating}</span>
      <span id="smallSave">SAVE 46% thru 01/31/2020</span>
    </div>
  )
}

export default Item;