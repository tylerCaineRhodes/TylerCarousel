import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      rating : props.rating
    }
  }

  render(){
    return (
      <div className='singleItem'>
        <img src={this.props.image}></img>
        <span id="itemName"><b>{this.props.name}</b></span>
        <span id="rating">
          
        <StarRatingComponent 
          name="rate" 
          editing={false}
          // renderStarIcon={() => <span id="icon"></span>}
          starCount={5}
          starColor={"#0471AF"}
          emptyStarColor={"white"}
          value={this.state.rating}
        />
        
        </span>
        <span id="smallSave">SAVE 46% thru 01/31/2020</span>
      </div>
    )
  }
}

export default Item;
//{name, image, category, rating}