import React, { useEffect, useState } from 'react';
import PlayerDetails from '../PlayerDelails/PlayerDetails';
import './Player.css'

const Player = () => {
  const [players,setPlayers] = useState([])
  useEffect(()=>{
    fetch('generated.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])

  return (
    <div className='player'>
      <div className="products-container">
      {
        players.map(player=><PlayerDetails 
          
          name={player.name}
          player = {player}
        
        ></PlayerDetails>)
      }
      </div>

      <div>
        <h6>Player Summery</h6>
      </div>

    </div>
  );
};

export default Player;