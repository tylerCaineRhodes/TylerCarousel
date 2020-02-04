import React from 'react';
import axios from 'axios';
import Item from './components/Item.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      classIncrement : 0
    }

    this.handleLeft = this.handleLeft.bind(this)
    this.handleRight = this.handleRight.bind(this)
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
  }

  fetchAllData(){
    axios.get('/wowStuff').then((response) => {
      console.log('this is the response from getting all the stuff --> ', response.data)
      this.setState({
        data : response.data,
      })
    })
    .catch((err) => {
      console.log('something went wrong with fetching all data from database', err)
    })
  }

  render(){
    
    return (
      <div>
        <h2 className="align-center">Related Items</h2>
     
        <div className= 'container'>

          <button className={'leftButton' + (this.state.classIncrement === 0 ? ' hide' : '')} onClick={this.handleLeft}><FontAwesomeIcon icon="angle-left" /></button>

          <button className={"rightButton" + (this.state.classIncrement + 2 === this.state.data.length /2 ? ' hide' : '')} onClick={this.handleRight}><FontAwesomeIcon icon="angle-right" /></button>

          <div className={'niceRow' + ` transformLeft${this.state.classIncrement}`}>

            {this.state.data.map((item) => 
            <div key={item.id}><Item name={item.name} image={item.image} category={item.category} rating={item.rating} /></div>
            )}

          </div>
        </div>
      </div>
    )
  }
}