import React from "react"
import {Route, Switch} from 'react-router-dom'
import Home from './home'
import Payment from './payment'
import Thankyou from './thankyou'
export default ({handleSingle,handleDouble,quantity,handleChange}) =>{
	return(
		<Switch>
			<Route exact path='/' render={(props)=>(<Home {...props} 
											handleSingle={handleSingle}
											handleDouble={handleDouble} />)} />
			<Route path='/payment' render={(props)=>(<Payment {...props}
											quantity={quantity}
											handleChange={handleChange} />)} />
			<Route path='/thankyou' component={Thankyou} />
		</Switch>
	)
}