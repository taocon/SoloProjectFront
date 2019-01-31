import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

var userInput;
class HomePage extends Component {

  

  constructor() {

    super();
    this.state = {
      items: [],
      filteredItems : []
    }

    this.filterItems = this.filterItems.bind(this);

    this.update = (event) => {
      userInput = event.target.value  //NOOOOO
      this.filterItems(userInput)
     
      
      axios({
        method:'get',
        url:'http://localhost:8080/Soloproject/rest/item/get',
        responseType:'json'
      })
      .then(res => {
        
        

        
      
        this.filterItems();
        //logic to whether is should be set to something else
        if (res.data == undefined)
        {

        }
        else
        {
          this.setState({
            items: res.data
            
           })
           
        console.log(this.state.items[1].itemName.toLowerCase())
        console.log(userInput)
        for (let i ; i < this.state.items.size ; i++ ) {
           if ( this.state.items[i].itemName.toLowerCase().contains(userInput)) {
             
             }
           }
        }
        
      // .then(response => this.loopMovies());
      // this.loopMovies();
      
      
    })
  }}


filterItems = (itemFilter) => {
  let filteredItems = this.state.items
  filteredItems = filteredItems.filter((item) => {
    let itemName = item.itemName
    return itemName.indexOf(
      itemFilter) !== -1
  })
}


// MAKE ITEMNAMES AN ARRAY BY ITSELF




render() {


  let items = this.state.items.map((item,i) => ( 
    <li >
      {item.itemName}
    </li>
 ))

// itemsName = this.state.items.itemName.map((itemN,i) => (
// <li>
//   {itemN.itemName}
// </li>





// ))

    return (
      <div class="home-container">
        <h1>Item Database</h1>
       
        <input id="userInput" type="text" placeholder="Enter movie name" onChange={this.update} />
        <ul >
        
          <li>{items}</li>
          
     

      
        </ul>
        {/* <Items item={this.state.filteredItems} match={this.props.match} onChange={this.filterItems}/> */}
       
        
  
      </div>
    );
  }
}

export default HomePage;