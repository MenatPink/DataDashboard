import React from 'react'
import RecentPlayers from './RecentPlayers'
import PlayerStats from './PlayerStats'

function ProfileStats(){
    return(
        <div className = "row profile-stats">
            <div className = "col-6">
                <RecentPlayers/>
            </div>
            <div className = "col-6">
                <PlayerStats/>
            </div>
        </div>
    )
}

export default ProfileStats