import React, {Component} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import DashboardTitle from './DashboardTitle'
import NumberStats from './NumberStats'
import Graphs from './Graphs'
import ProfileStats from './ProfileStats'

class Main extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className = "container-fluid">
                    <div className = "row">
                        <Sidebar/>
                        <div className = "col-11 dashboard">
                            <DashboardTitle/>
                            <NumberStats/>
                            <Graphs/>
                            <ProfileStats/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main