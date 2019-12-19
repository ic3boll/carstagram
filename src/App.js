import React, { Component } from "react";
import './index.css';
import Header from './header/header';

 
class App extends Component {
  render() {
   
    return (
      
        <div>
      <Header />
          <div className="content">
          </div>
        </div>
    );
  }
}
 
export default App;