import React, { Component } from 'react';
import './App.css';



class ItemComponent extends Component {


  constructor(props) {
    super(props);
    this.state = {
      atkdmg: '',
      ms: '',
      armr: '',
      str: '',
      dex: '',
      int: '',
      hp: '',
      hpreg: '',
      mana: '',
      manareg: '',
      magres: '',
      statres: '',
      spellamp: '',



    };
    // this.actionHandler = this.actionHandler.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    return (
     <div>  <h1>fkoafkofko</h1> lsdlswldllwdl
       
     <img className = "images" src={require("./images/hot.png")} ></img>
      </div>
     
     
    );
  }
}

export default ItemComponent;