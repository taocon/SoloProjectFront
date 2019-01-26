import React, { Component } from 'react';
import './App.css';


import axios from 'axios';



class Accounts extends Component {

  constructor() {

    super();

    this.state = {
      name: '',
      password: '',
      id: '',
      delId : '',
    }
  }

  handleChange1 = event => {
    this.setState({ name: event.target.value });

  }

  handleChange2 = event => {
    this.setState({ password: event.target.value });

  }

  handleChangeDel = event => {
    this.setState({ id: event.target.value });
  }

  handleChangeUpd = event => {
    this.setState({ delId: event.target.value });
  }


  handleSubmitAdd = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/Soloproject/rest/acc/add",
      data: {
        name: this.state.name,
        password: this.state.password
        
       }
     });
  }

  handleSubmitDelete = () => {
    axios({
      method: "delete",
      url: "http://localhost:8080/Soloproject/rest/acc/del/" + this.state.id ,
     });
  }

  handleSubmitUpdate = () => {
    axios({
      method: "put",
      url: "http://localhost:8080/Soloproject/rest/acc/update/" + this.state.delId ,
      data: {
        name: this.state.name,
        password: this.state.password      
       }
     });
  }

  render() {
    return (
      <div id="accountButtons">
<ul>
        <label>
          <li> Name:</li>
          <input type="text"  onChange={this.handleChange1} />
        </label>
        <label>
          <li> Password:</li>
          <input type="text"  onChange={this.handleChange2} />
        </label>

<li></li>
        <button type="button" onClick={this.handleSubmitAdd}>Create</button>
        </ul>

        <ul>
        <li><input type="text"  onChange={this.handleChangeDel} /></li>
        <li> <button type="button" onClick={this.handleSubmitDelete}>Delete</button></li>
        </ul>

        <ul>
        <li><input type="text"  onChange={this.handleChangeUpd} placeholder = "id" /></li>
        <li> <input type="text"  onChange={this.handleChange1} placeholder = "name" /></li>
        <li> <input type="text"  onChange={this.handleChange2} placeholder = "password"/></li>
        <li> <button type="button" onClick={this.handleSubmitUpdate}>Update</button></li>
        </ul>
      </div>

    );
  }
}

export default Accounts;