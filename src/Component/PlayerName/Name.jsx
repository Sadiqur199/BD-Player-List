import React from 'react';
import Badge from 'react-bootstrap/Button';
import './Name.css'
const Name = (props) => {
  const{name,id,img,Place} = props.Players
  return (
    <div>
      <div>
          <Badge  className='secondary mb-3'>
            <div className=''>
            <img className='added-img ' src={img} alt="" />
            </div>
             <p>{name}</p>
             <p>{Place}</p>
      </Badge>{' '}

      </div>
    </div>
  );
};

export default Name;