import React from 'react'
import {Grid, Col, Row, Jumbotron,Image, FormControl, FormGroup,ControlLabel,Form,Button} from 'react-bootstrap'
import LastLogo from './LastPage-Logo.png'

export default ()=>{
	return (
		<Grid >
			<Row style={{margin:'100px auto', color:'grey'}}>
				<Col xs={12} >
					<Jumbotron style={{background:'none'}}>
						<h3 style={{paddingLeft:'15px',fontWeight:'bold'}}>Thank you for your purchase!</h3>
						<Col xs={6}>
							<hr style={{backgroundColor:'grey',height:'2px'}} />
						</Col>
						<Col xsOffset={2} xs={10}>
							<br/>
							<br/>
							<br/>
							<p >To read more about Frii Designs, click here</p>
						</Col>

						<div style={{textAlign:'center'}}><br/>
							<a href=""><br/><br/>
								<Image src={LastLogo} width="150px" />
							</a>
						</div>
						
					</Jumbotron>
				</Col>
				</Row>
			</Grid>
	)
}