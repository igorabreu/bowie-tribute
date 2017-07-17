import React, { Component } from 'react';
import '../css/App.css';

import Data from '../static';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: '',
      src: ''
    }
    this.numbersArray = [];
    this.sortedNumbers = [];
  }

  render() {
    if(this.state.src === ''){
      return (
        <div className="App">
          <img className="loading" src='imgs/loading.gif' alt="loading"/>
        </div>
      );
    }else{
      return (
        <div className="App">
          <img className="bgImage" src={ this.state.src } alt="bg-gif"/>
          <img className="mainImage" src={ this.state.src } alt="gif"/>
        </div>
      );
    }
  }

  componentDidMount() {
    this.populateArray(Data.data.length);
  }

  changeUrl = () => {
    const sorted  = this.randomIndex(this.numbersArray);
    const index = this.numbersArray.indexOf(sorted);
    this.setState({ id: Data.data[sorted].id });
    this.numbersArray.splice(index, 1);
    this.setState({
      src: `https://i.giphy.com/${Data.data[sorted].id}.gif`,
    })
  }

  randomIndex = (array) => {
    let i = array.length-1,
        j = 0;
        
    j = Math.floor(Math.random() * (i+1));

    if(typeof array[j] !== "undefined"){
      return array[j];
    }else{
      this.populateArray(Data.data.length);
    }
  }

  populateArray = (length) => {
    for (let i = 0; i < length; i++) {
      this.numbersArray[i] = i;
    }
    setInterval(() => { this.changeUrl();}, 5000); 
  }

}

export default App;
