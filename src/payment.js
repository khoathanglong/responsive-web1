import React from 'react'
import {Grid, Col, Row, Jumbotron,Image, FormControl, FormGroup,ControlLabel,Form,Button} from 'react-bootstrap'
import Box from './image/Box.jpg'
import {buyNow} from './home'
import {Link} from 'react-router-dom'
const buyNowButton={
	...buyNow,
	border:'solid #ff4169 3px',
}
export default (props)=>{
	return (
		<Grid >
			<Row style={{margin:'100px auto', color:'grey'}}>
				<Col xs={12} sm={12} md="6">
					<Jumbotron style={{background:'none'}}>
						<h3 style={{paddingLeft:'15px',fontWeight:'bold'}}>Your Cart</h3>
						<hr style={{backgroundColor:'grey',height:'2px'}} />
						<Col xsOffset={1} >
							<p style={{fontWeight:'bold'}}>TriLens</p>
							<Image src={Box} responsive />
							<Form horizontal onSubmit={(e)=>{e.preventDefault()}} >
								<FormGroup bsSize="small">
									<Col  xs="2" md="4">
										<span style={{fontWeight:'normal',verticalAlign:'middle'}}>Quantity:</span>
									</Col>
									<Col xsOffset="1" mdOffset="0"  xs="4" md="4" >
										<FormControl 
										onChange={props.handleChange}
										defaultValue={props.quantity}
										type="text" 
										style={{textAlign:"center",fontWeight:'normal'}}  />
									</Col>		
								</FormGroup>
								<Row >
									<Col xs="2" md="4" style={{fontWeight:'normal'}}>
										Price:
									</Col>
									<Col xsOffset="1" xs="8" mdOffset="0"  >
										{props.quantity%2===1?
											(props.quantity-1)/2*179+99:
											props.quantity/2*179 } 
										{' '}&euro; + Shipping
									</Col>							
								</Row>
							</Form>
						</Col>
					</Jumbotron>
				</Col>
				<Col xs={12} sm={12} md="6">
					<Jumbotron style={{background:'none',}}>
						<h3 style={{paddingLeft:'15px',fontWeight:'bold'}}>Payment Options</h3>
						<hr style={{backgroundColor:'grey',height:'2px'}} />
						<p style={{fontWeight:'bold'}}>
							<i class="fa fa-credit-card" style={{color:"#ff4169",paddingRight:'20px'}}></i>
							<span >Credit Card</span>
						</p>
						<Col xsOffset={1}>
						<br/>
							<Form horizontal>
								<FormGroup>
									<Row>
										<Col xs="6"  md="6"style={{lineHeight:'34px'}}>
											<ControlLabel>Card number: </ControlLabel>
										</Col>
										<Col xs="6"  md="6">
											<FormControl type="text" />
										</Col>
									</Row>
								</FormGroup>
								
								<FormGroup>
									<Row>
										<Col xs="6" md="6" style={{lineHeight:'34px'}}>
											<ControlLabel>Verification number: </ControlLabel>
										</Col>
										<Col xs="6"  md="6">
											<FormControl type="text" style={{textAlign:"center", width:"100px"}} />
										</Col>
									</Row>
								</FormGroup>
								<FormGroup>
									<Row>
										<Col xs="6"  md="6"style={{lineHeight:'34px'}}>
											<ControlLabel>Card expires on: </ControlLabel>
										</Col>
										<Col xs="6"  md="6">
											<FormControl type="text" placeholder="mm/yy" 
											style={{textAlign:"center", width:"100px"}} />
										</Col>
									</Row>
								</FormGroup><br/>
								<Col mdOffset="2">
									<Link to={`${process.env.PUBLIC_URL}/thankyou`} >
										<Button style={buyNowButton}>Buy now</Button>
									</Link>
									
								</Col>
							</Form>
						</Col><br/><br/>
						<p style={{fontWeight:'bold'}}>
							<i class="fa fa-paypal" style={{color:"#ff4169",paddingRight:'20px'}}></i>
							<span style={{textDecoration:'underline',textDecorationColor:'#8FCADB'}}>
								<a href="" style={{color:'#8FCADB'}}>Pay with PayPal</a>
							</span>
						</p>
					</Jumbotron>
				</Col>
			</Row>
		</Grid>
	)
}