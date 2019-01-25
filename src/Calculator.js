import React, { Component } from 'react';
import './App.css';




class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: '+',
      num1: '',
      num2: '',
      result: '0'
    };
    this.actionHandler = this.actionHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(e) {
    this.setState({
   [e.target.name]: e.target.value
    });
  }

  actionHandler = (e) => {
    e.preventDefault();
    this.setState({ result : this.state.num1 + this.state.num2 })
  }
  render() {
    return (
      <div id = "accountButtons">
        <form>

          <input type="text" onChange={this.handleInputChange} name="num1" placeholder="Enter 1st Number" />
          <br />
          <br />
          <input type="text" onChange={this.handleInputChange} name="num2" placeholder="Enter 2nd Number" />
          <br />
          <button onClick={this.actionHandler} type="submit" > Answer </button>
          <input type="text" value={this.state.result} readOnly />
          <br />
          <br />
          <h1>{this.state.num1}</h1>
        </form>

      </div>
    );
  }
}

export default Calculator;