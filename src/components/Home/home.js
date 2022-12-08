import React, { useEffect, useState } from 'react';
import StudentItem from '../StudentItem/studentitem'
import { Link } from 'react-router-dom'
import ShowStudents from '../ShowStudents/showStudents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faAdd } from '@fortawesome/free-solid-svg-icons'
import './home.css'





export default function Student() {

    

  return (

    
        <>
            <div className='std-wrapper'>
                <Link to='/post'>
                    <h1>Students Data <FontAwesomeIcon className='add' icon={faAdd} /></h1>
                </Link>
                <ShowStudents/>
            </div>
            


        </>
    );
}

