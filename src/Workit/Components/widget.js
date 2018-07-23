import React from 'react';
import Ajax from 'superagent';


class Widget extends React.Component{

	constructor(){
		super();
		this.state = {};
	}

	componentWillMount(){
		
	}

	render(){
		return(
			<div className = "Widget">
				<h1>{ this.props.title }</h1>
			</div>
			);
		}
	}

export default Widget;