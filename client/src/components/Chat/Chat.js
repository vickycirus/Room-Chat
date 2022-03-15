import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import io from "socket.io-client";
import './chat.css'
let socket;
let ENDPOINT='localhost:5000';

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  useEffect(() => {
   
    const { name, room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)


    socket.emit('join',{name,room},({error})=>{
      alert('hello')
    })
    return()=>{
    socket.emit('disconnect');
    socket.off();
    }
  },[ENDPOINT,window.location.search]);
  
  return (
    <h1>Chat</h1>
  )
}

export default Chat