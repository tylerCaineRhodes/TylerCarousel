import React from 'react';
import axios from 'axios';
import Item from './components/Item.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      addClassForLeft : false,
      addClassForRight : false,
    }
    this.handleToggleClassLeft = this.handleToggleClassLeft.bind(this);
    this.handleToggleClassRight = this.handleToggleClassRight.bind(this);
  }

  handleToggleClassLeft(){
    this.setState({addClassForLeft : !this.state.addClassForLeft})
  }
  handleToggleClassRight(){
    this.setState({addClassForRight : !this.state.addClassForRight})
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

        <button className="leftButton" onClick={this.handleToggleClassLeft}></button>

        <button className="rightButton" onClick={this.handleToggleClassRight}></button>

        <div className={'niceRow' + (this.state.addClassForLeft? ' transformLeft' : "") + (this.state.addClassForRight? ' transformRight' : "")}>

          {this.state.data.map((item) => 
          <div key={item.id}><Item name={item.name} image={item.image} category={item.category} rating={item.rating} addClass={this.state.addClass} /></div>
          )}

        </div>
      </div>
    )
  }
}