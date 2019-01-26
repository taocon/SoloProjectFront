import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class ItemComponent extends Component {


  constructor(props) {

    super();

    this.state = {
      items: []
    }
      axios.get(`http://localhost:8080/Soloproject/rest/item/get` + props.match.params.id)
      .then(res => {
        this.setState({ 
          items: res.data });
        });
  }

  render() {
    return (
     <div>  <h1>fkoafkofko</h1>
       
     <img className = "images" src={require("./images/hot.png")} ></img>
      </div>
     
     
    );
  }
}

export default ItemComponent;