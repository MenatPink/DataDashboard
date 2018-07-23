import React from 'react'

function Player(props){
    return(
        <div className = "col-4">
        <img src = {props.src}/>
        <div className = "text">
            <p>{props.firstName + " " + props.lastName}</p>
            <p>{ props.location }</p>
            <p>{ props.id}</p>
        </div>
    </div>
    )
}

export default Player;