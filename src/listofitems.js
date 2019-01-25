import React, { Component } from 'react';
import './App.css';

import axios from 'axios';


class listofitems extends Component {

  constructor() {

    super();

    this.state = {
      items: []
    }
      axios.get(`http://localhost:8080/Soloproject/rest/item/get`)
      .then(res => {
        this.setState({ 
          items: res.data });
        });
  }



  render() {
let items = this.state.items.map((item,i) => (
<li><img className = "images" src={require("./images/items/" + item.itemImg + ".png")}></img></li>
))

    return (
      <div id = "accountButtons">
        <header >

      
   
          <ul>
        
    {items}
      </ul>
          
        </header>
      </div>
    );
  }
}

export default listofitems;