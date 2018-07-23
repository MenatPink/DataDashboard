import React, { Component } from 'react';

class NewsItem extends Component{
	render(){
		return(
			<div className = 'news-item-wrapper'>
				<p className = { this.props.nomargin }>{ this.props.title }</p>
				<p>{ this.props.description }</p>
			</div>
		)
	}
}


export default NewsItem;