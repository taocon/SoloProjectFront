import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

var itemImg;
class ItemComponent extends Component {

 
  constructor(props) {

   
    super();

    this.state = {
      items: [] ,
      render : false,
      tempItemId : "",
    }
      axios.get(`http://localhost:8080/Soloproject/rest/item/get/` + props.match.params.id)
      .then(res => {  
         
        console.log(res.data)     
        
        this.state.tempItemId = res.data.itemImg
        this.setState({ 
          items: res.data 
        });
        console.log("test")
        console.log(this.state.items)  
      });
        
      
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 500)
  }

  render() {
    let renderContainer = false //By default don't render anything
    if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
        renderContainer = <img className = "images" src={require("./images/items/" + this.state.tempItemId + ".png")}></img> //Add dom elements
    }
    
    return (
      
     <div>  <h1>ItemPage</h1>

       <ul className = "singleHeroPage">
       {renderContainer}
    <li> {this.state.items.itemName}</li>
    <li> {this.state.items.itemImg}</li>
   

     </ul>
     
      </div>
     
     
    );
  }
}

export default ItemComponent;