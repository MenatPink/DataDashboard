import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component{

	render(){
		return(
			<div className = "login-page">
			<h1>WorKit</h1>
			<h4>The Official App of getting things done</h4> 
				<div className = "login-form">
					<form>
						<p>ENTER LOGIN INFORMATION</p>
						<input type = "text" placeholder = "Name" onChange = { this.props.recordLoginName }/>
						<input type = "Password" placeholder = "Password" onChange = { this.props.recordLoginPassword } />
						<p className = "error-message bg-danger">Sorry! that doesn't appear to be right, try again?</p>
						<Link className = "log-in-button" type = "button" to="/loggedIn" onClick = { this.props.setLogonPageToGone }>
								Currently Instant Sign Up
						</Link>
					</form>
				</div>
			</div>	
		)
	}
} 

export default Login