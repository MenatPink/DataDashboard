import React,{ Component } from 'react'
import Arrowleft from './../Images/ArrowLeft.png';
import Arrowright from './../Images/ArrowRight.png';
import Player from './Player'

const userData = [
    {
        name:{
            firstName: 'Daryl',
            lastName: 'Ginn',
        },
        location: 'United Kingdom'
    },
    {
        name:{
            firstName: 'John',
            lastName: 'Mac',
        },
        location: 'United States'
    },
    {
        name:{
            firstName: 'Aaron',
            lastName: 'Sananes',
        },
        location: 'United Kingdom'
    },
    {
        name:{
            firstName: 'Erik',
            lastName: 'Henebratt',
        },
        location: 'Sweden'
    },
    {
        name:{
            firstName: 'Lindsay',
            lastName: 'Scott',
        },
        location: 'South Africa'
    },
    {
        name:{
            firstName: 'Jimmy',
            lastName: 'Mars',
        },
        location: 'Australia'
    },
    {
        name:{
            firstName: 'Daryl',
            lastName: 'Ginn',
        },
        location: 'United Kingdom'
    },
]



class RecentPlayers extends Component{

    createGrid = () =>{
        let grid = []
        let a = 1;
        for(let i = 0; i < 3; i++){
            let children = []
                for(let j = 0; j < 3; j++){
                    children.push(<Player key = {j + a - 1} firstName = {userData[j + i].name.firstName} lastName = {userData[j].name.lastName} src = {`https://robohash.org/${Math.floor(Math.random() * 100)}`} location = { userData[j].location }/>)
                }
                a += 3;
                grid.push(
                    <div className = "row">
                        { children }
                    </div>
                )
        }
        return grid
    }

    render(){
        return(
            <div className = "graph-wrapper recent-players">
                <div className = "graph-title">
                    <h2>Recent Players</h2>
                    <div>
                        <button>
                            <img src = {Arrowleft} />
                        </button>
                        <button>
                            <img src = {Arrowright}/>
                        </button>
                    </div>
                </div>
                { this.createGrid() }
            </div>
        )
    }
}

export default RecentPlayers