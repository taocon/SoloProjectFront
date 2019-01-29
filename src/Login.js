import React, { Component } from "react";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0;
  }


  handleChange = event => {
    this.setState({
      [this.state.name]: event.target.value
    });
  }


  handleChange1 = event => {
    console.log(this.state.name)
    this.setState({ name: event.target.value });

  }

  handleChange2 = event => {
    this.setState({ password: event.target.value });

  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          


          <input type="name" onChange={this.handleChange}/>
          <input type ="password"  onChange={this.handleChange}/>
          <button disabled={!this.validateForm()} type="submit">Login </button>
      
  
      
        
        </form>
      </div>
    );
  }
}