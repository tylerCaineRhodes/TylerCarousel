import React from 'react';
import axios from 'axios';
import Item from './components/Item.jsx';
import CarouselRelated from './components/CarouselRelated.jsx';
import CarouselVisited from './components/CarouselVisited.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      classIncrement : 0,
      selection: []
    }

    this.handleLeft = this.handleLeft.bind(this)
    this.handleRight = this.handleRight.bind(this)
    this.getRelatedItems = this.getRelatedItems.bind(this)
  }

  handleLeft(){
    if(this.state.classIncrement > 0){
      this.setState({classIncrement : this.state.classIncrement-=1})
    }
  }
  handleRight(){
    if((this.state.classIncrement) < (this.state.data.length / 2)){
      this.setState({classIncrement : this.state.classIncrement+=1})
    }
  }

  componentDidMount(){
    this.fetchAllData()
    window.addEventListener('jordanAwesome', this.getRelatedItems)
  }

  getRelatedItems(e){
    // console.log('this is the detail -->', e.detail)
    let idThing = e.detail;
    axios.get('http://carousel.us-east-2.elasticbeanstalk.com/wowStuff/category', {
      params : {
        id: idThing
      }
    }).then((response) => {
      // console.log('this is the response from trying to get a category-->', response.data)
      let tenList = [];
      let randomNum = Math.floor(Math.random() * Math.floor(4));
      let endNum = 15;
      for(let i = randomNum; i < (randomNum + endNum); i ++){
        if(response.data[i].id !== idThing){
          tenList.push(response.data[i])
        } else {
          endNum+=1;
        }
      }
      this.setState({
        selection: tenList
      })
    })
  }

  fetchAllData(){
    axios.get('http://carousel.us-east-2.elasticbeanstalk.com/wowStuff').then((response) => {
      // console.log('this is the response from getting all the stuff --> ', response.data)
      let tenList = [];
      // let randomNum = Math.floor(Math.random() * Math.floor(85));
      // for(let i = randomNum; i < (randomNum + 15); i++){
      //   tenList.push(response.data[i])
      // }
      for(let i = 1; i < 16; i++){
        tenList.push(response.data[i])
      }
      this.setState({
        data : response.data,
        selection: tenList
      })
    })
    .catch((err) => {
      console.log('something went wrong with fetching all data from database', err)
    })
  }

  render(){
    
    return (
      <div>
        <CarouselRelated
        classIncrement={this.state.classIncrement}
        handleLeft={this.handleLeft}
        handleRight={this.handleRight}
        selection={this.state.selection}
        />
        <CarouselVisited
        classIncrement={this.state.classIncrement}
        handleLeft={this.handleLeft}
        handleRight={this.handleRight}
        selection={this.state.data}
        />
      </div>
    )
  }
}