import React, { Component } from 'react';
// import logo from './logo.svg';
// import Background from './style/background.js'
import './App.css';
import Header from './header'
import Nav from './nav'
import Router from './router'
class App extends Component {
  constructor(){
    super();
    this.state={quantity:0};
    this.handleSingle=this.handleSingle.bind(this);
    this.handleDouble=this.handleDouble.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleSingle(){
    this.setState({quantity:1})
  }
  handleDouble(){
    this.setState({quantity:2})
  }
  handleChange(e){
    let quantity=Number(e.target.value)
    if (quantity){this.setState({quantity:quantity})}
    else{alert('Please enter a number to get the price')}
  }

  render() {
    return (
      <div className="App"> 
        <Header/>
        <Nav/>
        <Router
          handleDouble={this.handleDouble}
          handleSingle={this.handleSingle}
          quantity={this.state.quantity}
          handleChange={this.handleChange}
        />
        <div id="outerBottom" >
          <div  id="innerBottom"></div>
        </div>
      </div>
    );
  }
}

export default App;
