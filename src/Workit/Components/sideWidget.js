import React, { Component } from 'react';

class SideWidget extends Component{
	render(){
		return(
			<div className = "widget-wrapper">
			<div className = "widget-icon">
				<i className ="fab fa-twitter-square"></i>
			</div>
			<div className = "widget-text">
				<h4> {this.props.title} </h4>
				<p>{this.props.description}</p>
			</div>
			</div>
		)
	}
}

export default SideWidget