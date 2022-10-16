import React, { Component } from 'react';
import './App.css';
import SwitchButton from './SwitchButton';

class App extends Component {
  state = {
    time: 0,
    active: false,
    } 

    handleClick = () => {
      if (this.state.active){
        clearInterval(this.idInterval)
      } else {
        this.isInterval =  setInterval(() => this.addSecond(), 1000)
      }
      this.setState({
        active: this.state.active
      })
    }

    addSecond = () => {
      this.setState({
        time: this.state.time + 1
      })
    }

  render() { 
    return (
      <>
        <p>{this.state.time}</p>
        <p><SwitchButton onClick={this.handleClick} active={this.state.active}/></p>
      </>
    );
  }
}
 
export default App;