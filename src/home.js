import React from "react"
import {Grid, Col, Row, Image, Button,Jumbotron} from 'react-bootstrap'
import Box from './image/Box.jpg'
import {Link } from 'react-router-dom'
export const buyNow={
	background:'none',
	border:'solid #ff4169 5px',
	borderRadius:'25px',
	color:'#ff4169',
	fontWeight:'bold',
	padding:'10px 40px'
}
const addToCart={
	background:'#ff4169',
	border:'none',
	borderRadius:'25px',
	color:"white",
	fontWeight:'bold',
	padding:'15px 40px'
}
const title= {color:'#ff4169',marginTop:"0", fontWeight:'bold'}
export default (props)=>{
	return (
		<div style={{marginBottom:'70px'}}>
			<div id="video" style={{ textAlign: 'center'}} >
				<div id="videoTitle" style={{color:'white'}}>Lorem ipsum dolor. Sit amet.</div>
				<iframe title="intro" width="420" height="370" style={{position:'relative', top:'-30px'}}
				src="https://www.youtube.com/embed/nye4eAjtwT0" 
				frameborder="0" allow="autoplay; encrypted-media" 
				allowfullscreen>
				</iframe>
			</div>
			<br/>
			<Grid style={{marginTop:'40px'}}>
				<Row>
					<Col sm={5} xs={12} style={{paddingLeft:'0'}}>
						<Image src={Box} responsive />
					</Col>
					<Col smOffset={1} sm={6} xs={12} style={{paddingRight:'0'}}>
						<Jumbotron style={{background:'none', padding:'0'}}>
		  					<h1 style={title}>TRILENS</h1>
		  					<br/>
								<p>
								    Complete set including Housing. Belt clip, 5 x sets of cap magnets, 
								    3 x Protective caps and a Frii Designs pouch. Available for Cannon
								    EF, Nikon F or Sony E/FE lenses. Import fees may apply outside of the EU
								</p>
								<br/>
								<p style={{fontWeight:'Bold', fontSize:'24px'}}>
								    99 &euro; + Shipping
								</p>
								<br/>
								<p style={{margin:'0 auto'}}>
								<br/>
								<Col sm={4} smOffset={1} xs={6}>
									<Link to={`${process.env.PUBLIC_URL}/payment`}> 
										<Button bsSize="large" onClick={props.handleSingle}
											style={buyNow}>
											Buy now
										</Button>
									</Link>
								</Col>
								<Col sm={2} smOffset={2} xs={6}>
									<Button bsSize="large" 
										style={addToCart}>
										Add to cart
									</Button>
								</Col>
								</p>
						</Jumbotron>
					</Col>
				</Row>
				<hr style={{backgroundColor:'#ff4169',height: '2px'}}/>
				
				<Row>
				<br/>
					<Col smOffset={1} sm={5} smPush={6} xs={12} style={{paddingLeft:'0'}}>
						<Image src={Box} responsive />
					</Col>
					
					<Col  smPull={6} sm={6} xs={12} style={{paddingRight:'0'}}>
						<Jumbotron style={{background:'none', padding:'0'}}>
		  					<h1 style={title}>2 X TRILENS</h1>
		  					<br/>
								<p>
								    Two complete set including Housing. Belt clip, 5 x sets of cap magnets, 
								    3 x Protective caps and a Frii Designs pouch. Available for Cannon
								    EF, Nikon F or Sony E/FE lenses. Import fees may apply outside of the EU
								</p>
								<br/>
								<p style={{fontWeight:'Bold', fontSize:'24px'}}>
								    179 &euro; + Shipping
								</p>
								<br/>
								<p style={{margin:'0 auto'}}>
								<br/>
								<Col sm={4} smOffset={1} xs={6}>
									<Link to={`${process.env.PUBLIC_URL}/payment`}>
										<Button bsSize="large" onClick={props.handleDouble}
											style={buyNow}>
											Buy now
										</Button>
									</Link>	
								</Col>
								<Col sm={2} smOffset={2} xs={6}>
									<Button bsSize="large" 
										style={addToCart}>
										Add to cart
									</Button>
								</Col>
								</p>
						</Jumbotron>
					</Col>

				</Row>
			</Grid>

		</div>
	)
}