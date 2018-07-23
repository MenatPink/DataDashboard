import React, { Component } from 'react'

class Signup extends Component{
	render(){
		return(
			<div className = "signup-form">
				<div>
					<form>
						<input type = "text" placeholder = "Name"/>
						<input type = "text" placeholder = "Password"/>
						<button>LOGIN</button>
						<p>Haven't Registered Yet? <strong>Register</strong></p>
					</form>
				</div>
			</div>	
		)
	}
}

export default Signup