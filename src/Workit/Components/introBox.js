import React, {Component} from 'react';


class IntroBox extends Component{

toggleButton = () =>{

	let item = document.getElementsByClassName('menu-item');

	for(let i=0; i < item.length ; i++){
		if(Object.values(item[i].classList).indexOf('open') > -1){
			item[i].classList.remove('open');
		} else {
		item[i].classList.add('open');
		}
	}
}

	render(){
		return(
			<div>
			<div className = "cover-photo">
				<img src = "C:/Users/xx776tb/Desktop/workit/src/images/landscape.jpg" alt = "Profile"/>
				<div  className = "cover-photo-overlay"></div>
			</div>
				<div className = "control-tab">
					<button className = "tab-select">
						<p>SETTINGS</p>
					</button>
					<button className = "tab-select">
						<p>PHOTOS</p>
					</button>
						<nav className = "gooey-menu-main" onClick = {this.toggleButton}>
							<a className = "menu-item">
								<i className="fas fa-chess-queen"></i>
							</a>
							<a className = "menu-item">
								<i className="fas fa-truck"></i>
							</a>
							<a className = "menu-item">
								<i className="fas fa-boxes"></i>
							</a>
							<a className = "menu-item">
								<i className="fas fa-crosshairs"></i>
							</a>
							<a className = "menu-item">
								<i className="fas fa-bezier-curve"></i>
							</a>
						</nav>
						<h3>{ this.props.name }</h3>
					<button className = "tab-select">
						<p>TIMELINE</p>
					</button>
					<button className = "tab-select">
						<p>INFO</p>
					</button>
				</div>
			</div>
			);
	}
}

export default IntroBox