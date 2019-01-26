import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Listofitems from "./listofitems.js";
import Calculator from "./Calculator.js";
import Accounts from "./accounts.js";
import Homepage from "./HomePage.js";
import ItemComponent from "./ItemComponent.js";





class Nav extends Component {
    render() {
        return (
            <Router>
            <div >
                <div>
            <ul id = "navigationbarul">
            <li id = "i"><Link to="/">Home</Link></li>
            <li id = "i"><Link to="/items">ItemDatabase</Link></li>
            <li id = "i"><Link to="/calc">Calculator</Link></li>
            <li id = "i"><Link to="/acc">Accounts</Link></li>
            </ul>
           

            </div>

            <Route exact path="/" component={Homepage} />
            <Route path="/items" component={Listofitems} />
            <Route path="/calc" component={Calculator} />
            <Route path="/acc" component={Accounts} />
            <Route path="/item/:id" component={ItemComponent} />

            

            </div>
            </Router>
        );
    }
}

export default Nav;