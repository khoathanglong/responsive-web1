import React, { Component } from 'react';
// import logo from './logo.svg';
// import Background from './style/background.js'
import './App.css';
import Header from './header'
import Nav from './nav'
import Home from './home'
import Payment from './payment'
class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header/>
        <Nav/>
   
        <Payment/>
        <div id="outerBottom" >
          <div  id="innerBottom"></div>
        </div>
      </div>
    );
  }
}

export default App;
