const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const {addUser,getUser,removeUser,getUsersInRoom}=require('./users');
var cors = require('cors')

const PORT=5000;

const router=require('./router')
const app=express();

app.use(cors())
const server=http.createServer(app);
const io=socketio(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('join',({name,room},callback)=>{
     
      const {error,user}=addUser({id:socket.id,name,room})
      if(error)return callback(error);
      

      socket.join(user.room);

      socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

      callback();


      // let error=true;
     
      
    })
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
app.use(router);
server.listen(PORT,()=>console.log(`Server started on port ${PORT}`))