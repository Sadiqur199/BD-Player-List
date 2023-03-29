import React from 'react';
import Name from '../PlayerName/Name';
import './Add.css'
const Add = ({players}) => {
  console.log(players)
  let price = 0;
  let playerName = [];
  for(const player of players){
    price = price + player.price
    playerName.push(player)
  }
  return (
    <div className='Add'>
        <h6>Player Summery</h6>
        <p>Price : {price}</p>
        {
          playerName.map(pl=><Name
          Players = {pl}
          >
          </Name>)
        }
    </div>
  );
};

export default Add;