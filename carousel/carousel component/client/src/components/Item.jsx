import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      rating : props.rating,
      id: this.props.itemId
    }
    this.clickItem = this.clickItem.bind(this);
  }

  clickItem(){
    
    let event = new CustomEvent('jordanAwesome', {
      detail: this.state.id
    })
    // console.log(this.state.id)
    window.dispatchEvent(event)
  }

  render(){
    return (
      <div className='tsingleItem' onClick={this.clickItem} >
        <img id="t"src={this.props.image}></img>
        <span id="titemName"><b>{this.props.name}</b></span>
        <span id="trating">
          
        <StarRatingComponent 
          name="rate" 
          editing={false}
          renderStarIcon={() => <span id="icon"><FontAwesomeIcon icon="gavel" /></span>}
          starCount={5}
          // starColor={"#0471AF"}
          starColor={'#0471AF'}
          emptyStarColor={"#c4c8bd"}
          value={this.state.rating}
        />
        
        </span>
        <span id="tsmallSave">SAVE 46% thru 01/31/2020</span>
      </div>
    )
  }
}

export default Item;