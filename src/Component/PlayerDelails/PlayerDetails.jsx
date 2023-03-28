import React from 'react';
import './PlayerDetails.css'
const PlayerDetails = (props) => {
  console.log(props)
  const {name,category,img} = props.player
  return (
    <div className='playerDetails'>
      <img src={img} alt="" />
      <div>
      <p>Name:{name}</p>
      <p>category:{category}</p>
      </div>

    </div>
  );
};

export default PlayerDetails;