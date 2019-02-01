import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

var userInput;
class HomePage extends Component {

  

  constructor() {
    
    var filteredItems
  
    super();
    this.state = {
      items: [],
      filteredItems : [],
      uniqueNames : []
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
           
         console.log("THE LIST")
         console.log(this.state.uniqueNames)
          }

    
        for (let i =0 ; i < this.state.items.length ; i++ ) {

           if ( this.state.items[i].itemName.toLowerCase().includes(userInput)) {

             if (this.state.items[i].itemName !== undefined ) {
                 this.state.uniqueNames = this.state.uniqueNames.concat(this.state.items[i].itemName);             
                this.state.uniqueNames =this.state.uniqueNames.filter((val, id, array) => { return array.indexOf(val) == id;  });   
                 }

               }
            

          }

          for (let i=0 ; i< this.state.uniqueNames.length ; i++ ) {
            if (!this.state.uniqueNames[i].toLowerCase().includes(userInput)) {
              this.state.uniqueNames.splice(i,1);
            }
          }

          

         
     })
  }}




// MAKE ITEMNAMES AN ARRAY BY ITSELF




render() {


//   let items = this.state.items.map((item,i) => ( 
//     <li >
//       {item.itemName}
//     </li>
//  ))













// ))

    return (
      <div class="home-container">
        <h1>Item Database</h1>
       
        <input id="userInput" type="text" placeholder="Enter movie name" onChange={this.update} />
        
        
         
          <ul >
    {this.state.uniqueNames.map((name) => <li>{name}</li>)}
    </ul>
        

     

      
       
       
        
  
      </div>
    );
  }
}

export default HomePage;