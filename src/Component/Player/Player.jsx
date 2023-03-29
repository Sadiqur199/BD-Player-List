import React, { useEffect, useState } from 'react';
import PlayerDetails from '../PlayerDelails/PlayerDetails';
import './Player.css'

const Player = () => {
  const [players,setPlayers] = useState([])
  const [addplayer ,setAddplayer] = useState([])
  console.log(addplayer);

  useEffect(()=>{
    fetch('generated.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])
 
   const addedToPlayer = (Player)=>{
    const newPlayer = [...addplayer,Player]
    setAddplayer(newPlayer)
   }
   
  return (
    <div className='player'>
      <div className="products-container">
      {
        players.map(player=><PlayerDetails 
          
          name={player.name}
          player = {player}
          addedToPlayer = {addedToPlayer}
        ></PlayerDetails>)
      }
      </div>

      <div>
        <h6>Player Summery</h6>
        <p>Player length:{addplayer.length}</p>
      </div>

    </div>
  );
};

export default Player;