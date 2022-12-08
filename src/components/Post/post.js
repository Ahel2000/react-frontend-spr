import React, { useEffect, useState } from 'react';
import StudentItem from '../StudentItem/studentitem'
import { Link } from 'react-router-dom'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import './post.css'

var stompClient =null;

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[dataAdded, setDataAdded] = useState(false)

    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: ''
      });
    useEffect(() => {
      console.log(userData);
    }, [userData]);

    const onError = (err) => {
      console.log(err);
      
    }

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8081/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        // stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
        userJoin();
    }

    const userJoin=()=>{
          var chatMessage = {
            senderName: "Ahel",
            status:"MESSAGE",
            message: "Data added"
          };

          console.log(chatMessage)
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    

    const onMessageReceived = (payload)=>{
      var payloadData = JSON.parse(payload.body);
      console.log("MESSAGE RECEIVED")
      console.log(payloadData)
      // switch(payloadData.status){
      //     case "JOIN":
      //         if(!privateChats.get(payloadData.senderName)){
      //             privateChats.set(payloadData.senderName,[]);
      //             setPrivateChats(new Map(privateChats));
      //         }
      //         break;
      //     case "MESSAGE":
      //         publicChats.push(payloadData);
      //         setPublicChats([...publicChats]);
      //         break;
      // }
      console.log("PAYLOAD:")
      console.log(payloadData.status)
      setDataAdded(true)
  }

  const sendValue=()=>{
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status:"MESSAGE"
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      // setUserData({...userData,"message": ""});
    }
}

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

      var chatMessage = {
        senderName: userData.username,
        status:"MESSAGE"
      };

      console.log("payload:")
      sendValue()
    })

    
    connect()
    
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

                {dataAdded && <div className='data-added'><p>Your Data has been added...</p></div>}
            </div>
        </>
    );
}

