import React from 'react';
import Widget from './widget';
import {Ajax} from 'superagent'

class WidgetWall extends React.Component {
	render() {
		return(
			<div className = "body-container">

			<div className = "row">
				<div className = " col-8 d-inline-block calender">
						<Widget title = 'github' />
					</div>
				</div>
			</div>
		)
	}
}

export default WidgetWall;