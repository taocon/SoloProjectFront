import React, { Component } from 'react';
import './App.css';

import axios from 'axios';


class listofitems extends Component {

  constructor() {

    super();

    this.state = {
      items: []
    }
      axios.get(`http://51.140.34.229/Soloproject/rest/item/get`)
      .then(res => {
        this.setState({ 
          items: res.data });
        });
  }



  render() {
let items = this.state.items.map((item,i) => (

<li >
<a href={"item/" + item.itemId}><img className = "images" src={require("./images/items/" + item.itemImg + ".png")}></img></a>
</li>
))

    return (
      <div id = "accountButtons">
        <header >

      
   
          <ul className ="list-of-items">
        
    {items}
      </ul>
          
        </header>
      </div>
    );
  }
}

export default listofitems;
