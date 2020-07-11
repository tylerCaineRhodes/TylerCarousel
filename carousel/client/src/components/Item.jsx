import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends Component {
  constructor(props){
    super(props)

    this.state = {
      rating : props.rating,
      id: this.props.itemId,
      randomDeal: this.generateRandomDeal(),
      randomDate: this.generateRandomDate(),
    }
    this.clickItem = this.clickItem.bind(this);
    this.generateRandomDeal = this.generateRandomDeal.bind(this);
    this.generateRandomDate = this.generateRandomDate.bind(this);
  }

  clickItem(){
    let event = new CustomEvent('jordanAwesome', {
      detail: this.state.id
    })
    window.dispatchEvent(event)
  }

  generateRandomDeal(){
    let min = 6, max = 99;
    let deal = Math.floor(Math.random() * (max - min)) + min;
    return deal;
  }
  
  generateRandomDate(){
    const min = 1, dayMax = 28, monthMax = 12;
    let randomMonth = Math.floor(Math.random() * (monthMax - min)) + min, 
    randomDay = Math.floor(Math.random() * (dayMax - min)) + min,
    randomDate = randomMonth + '/' + randomDay + '/';
    return randomDate;
  }

  render(){
    const {randomDate, randomDeal, rating} = this.state; 
    
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
          starColor={'#0471AF'}
          emptyStarColor={"#c4c8bd"}
          value={rating}
        />
        
        </span>

        <span id="tsmallSave">SAVE { randomDeal }% thru { randomDate }2020</span>
      </div>
    )
  }
}

export default Item;
