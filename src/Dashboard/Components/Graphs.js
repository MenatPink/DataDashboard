import React from 'react'
import PlayerGraph from './PlayerGraph'
import TournamentGraph from './TournamentGraph'

function Graphs(){
    return(
        <div className = "row graphs-wrapper">
            <div className = "col-6">
                <PlayerGraph/>
            </div>
            <div className = "col-6">
                <TournamentGraph/>
            </div>
        </div>
    )
}

export default Graphs