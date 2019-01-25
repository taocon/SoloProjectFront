import React, { Component } from 'react';
import './App.css';


import axios from 'axios';



class Accounts extends Component {

  constructor() {

    super();

    this.state = {
      accounts: []
    }
      axios.get(`http://localhost:8080/Soloproject/rest/acc/get`)
      .then(res => {
        this.setState({ 
          accounts: res.data });
        });
  }

 


  render() {
    return (
      <div id = "accountButtons">
        <header >
      <ul>  
        <li><h1>Account Registration</h1></li>
      <li><input id = "account" placeholder = "Username"/></li>
      <li><input id = "account" placeholder = "Password"/></li>
      </ul>

      <ul>
        { this.state.accounts.map(accounts => <li>{accounts.name}  {accounts.password}</li>)}
  
      </ul>
          
        </header>
      </div>
    );
  }
}

export default Accounts;