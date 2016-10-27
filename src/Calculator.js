import React, { Component } from 'react';
import Keypad from './Keypad';
import Screen from './Screen';
class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      value: 0.0,
      stack: []
    }
  }

  updateValue(number){
    const {value} = this.state;
    const value_s = parseInt(value) + number
  }
  render() {
    const {value} = this.state;
    return (
      <div >
      <Screen value={value}/>
      <Keypad />
      </div>
    );
  }
}

Calculator.getInitialState ={

}

export default Calculator;
