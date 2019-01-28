import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class ItemComponent extends Component {


  constructor(props) {

    super();

    this.state = {
      items: []
    }
      axios.get(`http://localhost:8080/Soloproject/rest/item/get/` + props.match.params.id)
      .then(res => {
        
        this.setState({ 
          items: res.data });
        });
  }

  render() {
    return (
     <div>  <h1>ItemPage</h1>
       {console.log(this.state.items.itemName)}
      <img className = "images" src={require("./images/items/present_lg.png")} ></img> 
       <ul>
    <li> {this.state.items.itemName}</li>
    <li> {this.state.items.itemImg}</li>
     </ul>
      </div>
     
     
    );
  }
}

export default ItemComponent;