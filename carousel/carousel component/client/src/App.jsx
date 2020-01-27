import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : []
    }
  }

  render(){
    return (
      <div>
        <h1>This is a carousel, I promise...</h1>
      </div>
    )
  }
}