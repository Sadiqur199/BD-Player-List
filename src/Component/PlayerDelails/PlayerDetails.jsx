import React from 'react';
import './PlayerDetails.css'
const PlayerDetails = (props) => {
  const {name,category,img,Place,price,strick} = props.player
  const addedToPlayers = props.addedToPlayer
  return (
    <div className='playerDetails'>
      <img src={img} alt="" />
      <div className='playerDetailsInfo'>
      <h4 className='playerName'>Name:{name}</h4>
        <p>Position:{Place}</p>
        <p>Price:{price}</p>
        <p>Category:{category}</p>
        <p>Stick-Rate:{strick}</p>
      </div>
      <button className='Add-player' onClick={()=>addedToPlayers(props.player)}>Add Player</button>
    </div>
  );
};

export default PlayerDetails;