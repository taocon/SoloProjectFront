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
     
      
      axios({
        method:'get',
        url:'http://localhost:8080/Soloproject/rest/item/get',
        responseType:'json'
      })
      .then(res => {
        

        console.log(this.state.items[0])
        console.log(this.state.filteredItems)
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







render() {


  let items = this.state.items.map((item,i) => ( 
    <li >
      {item.itemName}
    </li>
  ))

    return (
      <div class="home-container">
        <h1>Item Database</h1>
       
        <input id="userInput" type="text" placeholder="Enter movie name" onChange={this.update}/>
        <ul >
        
          <li>{items}</li>

      
        </ul>
        {/* <Items item={this.state.filteredItems} match={this.props.match} onChange={this.filterItems}/> */}
        {this.state.filteredItems[1]}
      </div>
    );
  }
}

export default HomePage;