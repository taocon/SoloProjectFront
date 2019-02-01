import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

var userInput;
class HomePage extends Component {

  

  constructor() {
    var uniqueNames
    var filteredItems
    var joined = ["1"]
    super();
    this.state = {
      items: [],
      filteredItems : []
    }



    this.update = (event) => {
      userInput = event.target.value  
     
      
      axios({
        method:'get',
        url:'http://localhost:8080/Soloproject/rest/item/get',
        responseType:'json'
      })
      .then(res => {
        
        

        
      
     

        if (res.data === undefined)
        {

        }
        else
        {
          this.setState({
            items: res.data
            
           })
           
         console.log(this.state.items[1].itemName.toLowerCase())
          }

    
        for (let i =0 ; i < this.state.items.length ; i++ ) {

           if ( this.state.items[i].itemName.toLowerCase().includes(userInput)) {

             if (this.state.items[i].itemName !== undefined) {
           
               joined = this.state.filteredItems.concat(this.state.items[i].itemName);             
                uniqueNames = joined.filter((val, id, array) => {
                  return array.indexOf(val) == id;  
               });
               console.log(uniqueNames)
         
            } else {
        
              this.state.items[i].itemName = null
            }
          
             }





           }
        
        

      
    })
  }}




// MAKE ITEMNAMES AN ARRAY BY ITSELF




render() {


  let items = this.state.items.map((item,i) => ( 
    <li >
      {item.itemName}
    </li>
 ))

let filteredItems = this.state.uniqueNames.map((item,i ) => (

{item.itemName}

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
      
       
        
  
      </div>
    );
  }
}

export default HomePage;