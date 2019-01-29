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

    this.update = (event) => {
      userInput = event.target.value  //NOOOOO
      console.log(userInput)
      
      axios({
        method:'get',
        url:'http://localhost:8080/Soloproject/rest/item/get',
        responseType:'json'
      })
      .then(res => {
        console.log("potato")
        console.log(res.data)
        console.log(this.state.items.itemId)
        //logic to whether is should be set to something else
        if (res.data == undefined)
        {

        }
        else
        {
          this.setState({
            items: res.data
            
           })
        }
      // .then(response => this.loopMovies());
      // this.loopMovies();

      
    })
  }}


filterItems = (itemFilter) => {
  let filteredItems = this.state.items
  filteredItems = filteredItems.filter((item) => {
    let itemName = item.itemName.toLowerCase()
    return itemName.indexO(
      itemFilter.toLowerCase()) !== -1
  })
}







render() {

  let items = this.state.items.map((item,i) => ( 
    <li >
      {item.itemName}
    </li>
    
   
   

  ))
    return (
      <div class="home-container">
        <h1>Welcome to the Movie Database</h1>
        <h4>Feel free to search for a movie</h4>
        <input id="userInput" type="text" placeholder="Enter movie name" onChange={this.update}/>
        <ul >
        
          <li>{items}</li>
        </ul>
        <Items item={this.state.filteredItems} match={this.props.match} onChange={this.filterItems}/>
      </div>
    );
  }
}

export default HomePage;