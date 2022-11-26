import React, { useEffect, useState } from 'react';
import StudentItem from '../StudentItem/studentitem'
import { Link } from 'react-router-dom'
import './post.css'

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8081/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added")
  })
}


  return (

    
        <>
            <div>
                <form className='form'>
                    <label for="name" className='input-label'>First name:</label>
                    <input type="text" id="name" name="name" className='form-item' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <label for="address" className='input-label'>Address:</label>
                    <input type="text" id="name" name="name" className='form-item'></input>
                    <label for="address" className='input-label'>Last Name:</label>
                    <input type="text" id="address" name="address" className='form-item' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                    <button onClick={handleClick} className='form-button'>Submit</button>
                </form>
            </div>
        </>
    );
}

