import React,{Component} from 'react'
import Part1 from './../Images/Part1.png';
import Part2 from './../Images/Part2.png';

class Navbar extends Component{
    render(){
        return(
            <div className = "container-fluid nav-wrapper">
                <div className = "row">
                    <div className = "logo-wrapper col-1">
                        <img src = { Part1 } />
                        <img src = { Part2 }/>
                    </div>
                    <div className = "inner-nav-wrapper col-8">
                        <nav>
                            <p>+ Add User</p>
                            <p>User Preferences</p>
                            <p>Settings</p>
                        </nav>
                        <input type = "search" placeholder = "search" />
                    </div>
                    <div className = "col-3"></div>
                </div>
            </div>
        )
    }
}

export default Navbar