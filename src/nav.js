import React from 'react'
import {Navbar,Nav, Image,NavItem} from 'react-bootstrap'
import Logo from "./Logo-Header.png"
import BuzzerLogo from './globuzzer.png'
import {Link} from 'react-router-dom'//link to redirect endpoint

const spanStyle={verticalAlign:"middle", fontSize:'24px',color:'#fff'}
const navItemStyle={color:"#fff", fontSize:'16px'}
export default ()=>{
  return (
     <Navbar fixedTop collapseOnSelect fluid  style={{border: "0",boxShadow: 'none'}}>
            <Navbar.Header >
              <Navbar.Brand >
                <span>
                 <Link to={`/`} style={{textDecoration:'none'}}>  
                  <Image src={Logo} circle style={{background:"black", marginRight:'32px'}} width="32px"/>
                  <span style={spanStyle}>GLB</span>
                    <Image src={BuzzerLogo} width="24px"/>
                  <span style={spanStyle}>BUZZER</span>
                 </Link>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight style={{color:"white"}}>
                <NavItem eventKey={1} href="#" >
                 <span style={navItemStyle}>Products</span>
               </NavItem>
              <NavItem eventKey={2} href="#">
                  <span style={navItemStyle}>Read more</span>
              </NavItem>
              <NavItem eventKey={3} href="#">
                 <span style={navItemStyle}>Partners</span>
              </NavItem>
              <NavItem eventKey={4} href="#">
                  <i className="fa fa-shopping-cart" style={navItemStyle}></i>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  )
}