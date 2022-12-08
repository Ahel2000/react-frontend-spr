import React from 'react';
import './studentitem.css'


export default function StudentItem(props){
  

  return (
    <>
      <div className='student-item-wrapper'>
        <h1 className='student-header'>{props.name}</h1>
        <h2>{props.address}</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget neque sit amet arcu euismod gravida et sit amet nisl. Suspendisse rutrum arcu sit amet ultrices congue.</h5>
      </div>
    </>
  );
};

