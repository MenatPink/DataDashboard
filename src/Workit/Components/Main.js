import React, { Component } from 'react';
import Sidebar from './sideBar';
import Navbar from './navBar';
import WidgetWall from './widgetWall';
import IntroBox from './introBox';
import NewsFeed from './newsFeed';
import Login from './login';
import Scroll from './scroll';
import { Route } from 'react-router-dom'
import Google_credentials from './../data/dontLookInHere';



class Main extends Component{
	state = {
		credentials:{
			googleClientID : "908790419085-nfln7j0k9fkcqdg6v73j8a3omg3ater7.apps.googleusercontent.com ",
			clientSecret : "0ZLsaAobii5uCguZH4dUOoUc"
		},
		name: " ",
		password: " ",
			users:{
				Philipa:{
					name: 'Philipa',
					password: 'password',
					color: 'blue'
				},
				Jane:{
					name: 'Jane',
					password: 'password'
				},
				Janet:{
					name: 'Janet',
					password: 'password'

				},
				Jacqueline:{
					name: 'Jacqueline',
					password: 'password'

				},
				Molly:{
					name: 'Molly',
					password: 'password'

				},
				Jenny:{
					name: 'Jenny',
					password: 'password'

				},
				Mary:{
					name: 'Mary',
					password: 'password'

				},
			 },
		}
		
			setLoginName = () => this.setState({name: 'John'})

			recordLoginName = (event) => {
				this.setState({name: event.target.value})
			}

			recordLoginPassword = (event) => {
				this.setState({password: event.target.value})
			}

			setLogonPageToGone = () => {
				console.log('function running');
				let users = this.state.users;
				const logOnPage = document.querySelector('.login-page');

				for(let i in users ){
					if (this.state.name === users[i].name && this.state.password === users[i].password){
							 this.setState({users: [i]});
							let url = document.URL + "loggedIn";
							const input = document.querySelector('input');
							input.value = "";
					} else {
						document.querySelector('.error-message').style.display = 'block';
					}
				}
			}


	render(){
		return(
			<div>
			<Route exact path = "/" render= { () => ( 
			<div>
				<Login recordLoginPassword = { this.recordLoginPassword } recordLoginName = { this.recordLoginName } setLogonPageToGone = { this.setLogonPageToGone }/>
			</div>
				)}/>

<Route exact path = "/loggedIn" render = {() => (
	<div>
				<Navbar color = { this.state.color } name = { this.state.name }/>
					<Scroll> 
			<div className = "container">
					<IntroBox name = { this.state.name }/>
					<Sidebar/>
						<WidgetWall/>
		 		</div>
					</Scroll>
						<NewsFeed/>
			</div>
		)}/>
		</div>
		)
	}
}

export default Main;