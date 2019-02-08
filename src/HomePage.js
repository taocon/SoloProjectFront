import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

var userInput;
class HomePage extends Component {

  

  constructor() {
    
  
    super();
    this.state = {
      items: [],
      uniqueNames : [],
      uniqueImg : [] ,
      
    }
    this.update = (event) => {
     userInput = event.target.value 
     axios({
        method:'get',
        url:'http://51.140.34.229:8080/Soloproject/rest/item/get',
     
      })
      .then(res => {
         if (res.data === undefined)
        {}
        else
        {
          this.setState({
            items: res.data
            
           })
         }

          for (let i =0 ; i < this.state.items.length ; i++ ) {

            if ( this.state.items[i].itemName.toLowerCase().includes(userInput)) {
                this.state.uniqueNames = this.state.uniqueNames.concat(this.state.items[i].itemName);             
                 this.state.uniqueNames =this.state.uniqueNames.filter((val, id, array) => { return array.indexOf(val) == id;  });
             this.state.uniqueImg = this.state.uniqueImg.concat(this.state.items[i].itemImg);
               this.state.uniqueImg = this.state.uniqueImg.filter((val,id,array) => {return array.indexOf(val) == id;});
               }

          
           }
        for (let i=0 ; i< this.state.items.length ; i++ ) {

          if (this.state.uniqueNames[i] !== undefined) {
            if (!this.state.uniqueNames[i].toLowerCase().includes(userInput)) {

              this.state.uniqueNames.splice(i,1);
              this.state.uniqueImg.splice(i,1); 
              }
            }
          }
   })
  }}

render() {

  
    return (
      <div class="home-container">
        <h1>Item Database</h1>
        <input id="userInput" type="text" placeholder="Seach" onChange={this.update} />
           <ul >
    {this.state.uniqueNames.map((name) => <li>{name}</li>)}
    </ul>
      </div>
    );
  }
}

export default HomePage;