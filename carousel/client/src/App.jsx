import React from 'react';
import axios from 'axios';
import Item from './components/Item.jsx';
import CarouselRelated from './components/CarouselRelated.jsx';
import CarouselVisited from './components/CarouselVisited.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      classIncrement: 0,
      classIncrementViewed: 0,
      selection: [],
      selectionViewed: [],
    };

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleLeftViewed = this.handleLeftViewed.bind(this);
    this.handleRightViewed = this.handleRightViewed.bind(this);
    this.getRelatedItems = this.getRelatedItems.bind(this);
    this.getClickedItem = this.getClickedItem.bind(this);
  }

  handleLeft() {
    if (this.state.classIncrement > 0) {
      this.setState({ classIncrement: (this.state.classIncrement -= 1) });
    }
  }

  handleRight() {
    if (this.state.classIncrement < this.state.data.length / 2) {
      this.setState({ classIncrement: (this.state.classIncrement += 1) });
    }
  }

  handleLeftViewed() {
    if (this.state.classIncrementViewed > 0) {
      this.setState({
        classIncrementViewed: (this.state.classIncrementViewed -= 1),
      });
    }
  }

  handleRightViewed() {
    if (this.state.classIncrementViewed < this.state.data.length / 2) {
      this.setState({
        classIncrementViewed: (this.state.classIncrementViewed += 1),
      });
    }
  }

  componentDidMount() {
    this.fetchAllData();

    window.addEventListener('jordanAwesome', (e) => {
      this.getRelatedItems(e);
      this.getClickedItem(e);
    });
  }
  
  getClickedItem(e) {
    axios
      .get('http://carousel.us-east-2.elasticbeanstalk.com/wowStuff/item', {
        params: {
          id: e.detail,
        },
      })
      .then((response) => {
        //check and see if item is already in carousel. if it isn't -->
        let temp = this.state.selectionViewed.concat(response.data);
        this.setState({
          selectionViewed: temp,
        });
      })
      .catch((err) => {
        console.log(
          'something went wrong with fetching an item yo from database',
          err
        );
      });
  }

  getRelatedItems(e) {
    console.log('this is the detail -->', e.detail);
    let idThing = e.detail;
    axios
      .get('http://carousel.us-east-2.elasticbeanstalk.com/wowStuff/category', {
        params: {
          id: idThing,
        },
      })
      .then((response) => {
        // console.log('this is the response from trying to get a category-->', response.data)
        let fifteenItems = [];
        let randomNum = Math.floor(Math.random() * Math.floor(4));
        let endNum = 15;
        for (let i = randomNum; i < randomNum + endNum; i++) {
          if (response.data[i].id !== idThing) {
            fifteenItems.push(response.data[i]);
          } else {
            endNum += 1;
          }
        }
        this.setState({
          selection: fifteenItems,
        });
      });
  }

  fetchAllData() {
    axios
      .get('http://carousel.us-east-2.elasticbeanstalk.com/wowStuff')
      .then((response) => {
        let fifteenItems = [];
        // let randomNum = Math.floor(Math.random() * Math.floor(85));
        // for(let i = randomNum; i < (randomNum + 15); i++){
        //   fifteenItems.push(response.data[i])
        // }
        for (let i = 1; i < 16; i++) {
          fifteenItems.push(response.data[i]);
        }
        this.setState({
          data: response.data,
          selection: fifteenItems,
        });
      })
      .catch((err) => {
        console.log(
          'something went wrong with fetching all data from database',
          err
        );
      });
  }

  render() {
    return (
      <div>
        <CarouselRelated
          classIncrement={this.state.classIncrement}
          handleLeft={this.handleLeft}
          handleRight={this.handleRight}
          selection={this.state.selection}
        />
        <CarouselVisited
          classIncrementViewed={this.state.classIncrementViewed}
          handleLeftViewed={this.handleLeftViewed}
          handleRightViewed={this.handleRightViewed}
          selectionViewed={this.state.selectionViewed}
        />
      </div>
    );
  }
}
