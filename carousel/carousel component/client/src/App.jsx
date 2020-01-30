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

  // handleToggleClassLeft(){
  //   this.setState({addClassForLeft : !this.state.addClassForLeft})
  // }
  // handleToggleClassRight(){
  //   this.setState({addClassForRight : !this.state.addClassForRight})
  // }
  handleLeft(){
    if(this.state.classIncrement > 0){
      this.setState({classIncrement : this.state.classIncrement-=1})
    }
  }
  handleRight(){
      this.setState({classIncrement : this.state.classIncrement+=1})
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
     
      <div className= 'container'>

        <button className="leftButton" onClick={this.handleLeft}></button>

        <button className="rightButton" onClick={this.handleRight}></button>

        <div className={'niceRow' + (this.state.classIncrement === 1 ? ' transformLeft1' : "") + (this.state.classIncrement === 2 ? ' transformLeft2' : "") + (this.state.classIncrement === 3 ? ' transformLeft3' : "") + (this.state.classIncrement === 4 ? ' transformLeft4' : "")}>

          {this.state.data.map((item) => 
          <div key={item.id}><Item name={item.name} image={item.image} category={item.category} rating={item.rating} /></div>
          )}

        </div>
      </div>
    )
  }
}