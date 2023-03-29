import React, { useEffect, useState } from 'react';
import Add from '../AddPlayer/Add';
import PlayerDetails from '../PlayerDelails/PlayerDetails';
import './Player.css'

const Player = () => {
  const [players,setPlayers] = useState([])
  const [addplayer ,setAddplayer] = useState([])

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
      <div className="products-container ">
      {
        players.map(player=><PlayerDetails 
           
          key = {player.id}
          name={player.name}
          player = {player}
          addedToPlayer = {addedToPlayer}
        ></PlayerDetails>)
      }
      </div>

      <div>
        <Add  players ={addplayer}></Add>
      </div>

    </div>
  );
};

export default Player;