import React, { Component } from "react";
import './header.module.css';

 
class Header extends Component {
  render() {
   
    return (
      
        <div>
          <h1>Carstagram</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="right"><a href="/login">Login</a></li>
            <li className="right" ><a href="/register">Register</a></li>
          </ul>
          <div className="content">
          </div>
        </div>
    );
  }
}
 
export default Header;