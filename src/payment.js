import React from 'react'
import {Grid, Col, Row, Jumbotron,Image, FormControl, FormGroup,ControlLabel,Form,Button} from 'react-bootstrap'
import Box from './Box.jpg'
import {buyNow} from './home'
const buyNowButton={
	...buyNow,
	border:'solid #ff4169 3px',
}
export default ()=>{
	return (
		<Grid >
			<Row style={{margin:'100px auto', color:'grey'}}>
				<Col xs={12} sm={12} md="6">
					<Jumbotron style={{background:'none'}}>
						<h2 style={{paddingLeft:'15px',fontWeight:'bold'}}>Your Cart</h2>
						<hr style={{backgroundColor:'grey',height:'2px'}} />
						<Col xsOffset={1}>
							<p style={{fontWeight:'bold'}}>TriLens</p>
							<Image src={Box} responsive />
							<Form horizontal>
								<FormGroup bsSize="small">
									<Col componentClass={ControlLabel} xs="2"  style={{fontWeight:'normal'}}>
										Quantity:
									</Col>
									<Col xs="4"  >
										<FormControl type="text" style={{textAlign:"center"}} />
									</Col>				
								</FormGroup>
							</Form>
							<Row>
								<Col xs="2"  >
									<ControlLabel style={{fontWeight:'normal'}}>Price:</ControlLabel>
								</Col>
								<Col xs="10"  >
									<span>99 &euro; + Shipping</span>
								</Col>
							</Row>
						</Col>
					</Jumbotron>
				</Col>
				<Col xs={12} sm={12} md="6">
					<Jumbotron style={{background:'none',}}>
						<h2 style={{paddingLeft:'15px',fontWeight:'bold'}}>Payment Options</h2>
						<hr style={{backgroundColor:'grey',height:'2px'}} />
						<p style={{fontWeight:'bold'}}>
							<i class="fa fa-credit-card" style={{color:"#ff4169"}}></i>{' '}
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
								</FormGroup>
								<Col mdOffset="2">
									<Button style={buyNowButton}>Buy now</Button>
								</Col>
							</Form>
						</Col>
					</Jumbotron>
				</Col>
			</Row>
		</Grid>
	)
}