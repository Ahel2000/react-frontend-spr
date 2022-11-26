import React from 'react';
import './studentitem.css'


export default function StudentItem(props){
  

  return (
    <>
      <div className='student-item-wrapper'>
        <h1>{props.name}</h1>
        <h2>{props.address}</h2>
      </div>
    </>
  );
};

