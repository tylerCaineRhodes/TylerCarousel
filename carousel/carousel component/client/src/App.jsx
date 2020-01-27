import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : []
    }
  }

  componentDidMount(){
    this.fetchAllData()
  }
  fetchAllData(){
    axios.get('http://localhost:3005/wowStuff').then((response) => {
      console.log('this is the response from getting all the stuff --> ', response.data)
      this.setState({
        data : response.data
      })
    })
    .catch((err) => {
      console.log('something went wrong with fetching all data from database', err)
    })
  }

  render(){
    return (
      <div className="container">
        <h1>This is a carousel, I promise...</h1>
        
      </div>
    )
  }
}