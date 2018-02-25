import React, { Component } from 'react';
import Footer from './footer'
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
  handleScroll(){
    if(document.getElementById('video')){
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById('video').className=""
      }else{
        document.getElementById('video').className="headerMarginTop"
      }
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnMount(){
    window.removeEventListener('scroll', this.handleScroll);
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
        <Footer/>
      </div>
    );
  }
}

export default App;
