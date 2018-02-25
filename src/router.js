import React from "react"
import {Route, Switch} from 'react-router-dom'
import Home from './home'
import Payment from './payment'
import Thankyou from './thankyou'
export default ({handleSingle,handleDouble,quantity,handleChange}) =>{
	return(
		<Switch>
			<Route exact path={`${process.env.PUBLIC_URL}/`} render={(props)=>(<Home {...props} 
											handleSingle={handleSingle}
											handleDouble={handleDouble} />)} />
			<Route path={`${process.env.PUBLIC_URL}/payment`} render={(props)=>(<Payment {...props}
											quantity={quantity}
											handleChange={handleChange} />)} />
			<Route path={`${process.env.PUBLIC_URL}/thankyou`} component={Thankyou} />
		</Switch>
	)
}