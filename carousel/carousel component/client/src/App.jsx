import React from 'react';
import axios from 'axios';
import Item from './components/Item.jsx';

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
    axios.get('http://localhost:3005/wowStuff').then((response) => {
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
        <h2 className="align-center">Related</h2>
     
        <div className= 'container'>

          <button className={'leftButton' + (this.state.classIncrement === 0 ? ' hide' : '')} onClick={this.handleLeft}></button>

          <button className={"rightButton" + (this.state.classIncrement + 2 === this.state.data.length /2 ? ' hide' : '')} onClick={this.handleRight}></button>

          <div className={
            'niceRow' + (this.state.classIncrement === 1 ? ' transformLeft1' : "") + (this.state.classIncrement === 2 ? ' transformLeft2' : "") + (this.state.classIncrement === 3 ? ' transformLeft3' : "") + (this.state.classIncrement === 4 ? ' transformLeft4' : "") + (this.state.classIncrement === 5 ? ' transformLeft5' : "") + (this.state.classIncrement === 6 ? ' transformLeft6' : "") + (this.state.classIncrement === 7 ? ' transformLeft7' : "") + (this.state.classIncrement === 8 ? ' transformLeft8' : "") + (this.state.classIncrement === 9 ? ' transformLeft9' : "") + (this.state.classIncrement === 10 ? ' transformLeft10' : "") + (this.state.classIncrement === 11 ? ' transformLeft11' : "") + (this.state.classIncrement === 12 ? ' transformLeft12' : "") + (this.state.classIncrement === 13 ? ' transformLeft13' : "") + (this.state.classIncrement === 14 ? ' transformLeft14' : "") + (this.state.classIncrement === 15 ? ' transformLeft15' : "") + (this.state.classIncrement === 16 ? ' transformLeft16' : "") + (this.state.classIncrement === 17 ? ' transformLeft17' : "") + (this.state.classIncrement === 18 ? ' transformLeft18' : "") + (this.state.classIncrement === 19 ? ' transformLeft19' : "") + (this.state.classIncrement === 20 ? ' transformLeft20' : "") + (this.state.classIncrement === 21 ? ' transformLeft21' : "") + (this.state.classIncrement === 22 ? ' transformLeft22' : "") + (this.state.classIncrement === 23 ? ' transformLeft23' : "") + (this.state.classIncrement === 24 ? ' transformLeft24' : "") + (this.state.classIncrement === 25 ? ' transformLeft25' : "") + (this.state.classIncrement === 26 ? ' transformLeft26' : "") + (this.state.classIncrement === 27 ? ' transformLeft27' : "") + (this.state.classIncrement === 28 ? ' transformLeft28' : "") + (this.state.classIncrement === 29 ? ' transformLeft29' : "") + (this.state.classIncrement === 30 ? ' transformLeft30' : "") + (this.state.classIncrement === 31 ? ' transformLeft31' : "") + (this.state.classIncrement === 32 ? ' transformLeft32' : "") + (this.state.classIncrement === 33 ? ' transformLeft33' : "") + (this.state.classIncrement === 34 ? ' transformLeft34' : "") + (this.state.classIncrement === 35 ? ' transformLeft35' : "") + (this.state.classIncrement === 36 ? ' transformLeft36' : "") + (this.state.classIncrement === 37 ? ' transformLeft37' : "") + (this.state.classIncrement === 38 ? ' transformLeft38' : "") + (this.state.classIncrement === 39 ? ' transformLeft39' : "") + (this.state.classIncrement === 40 ? ' transformLeft40' : "") + (this.state.classIncrement === 41 ? ' transformLeft41' : "") + (this.state.classIncrement === 42 ? ' transformLeft42' : "") + (this.state.classIncrement === 43 ? ' transformLeft43' : "") + (this.state.classIncrement === 44 ? ' transformLeft44' : "") + (this.state.classIncrement === 45 ? ' transformLeft45' : "")}>

            {this.state.data.map((item) => 
            <div key={item.id}><Item name={item.name} image={item.image} category={item.category} rating={item.rating} /></div>
            )}

          </div>
        </div>
      </div>
    )
  }
}