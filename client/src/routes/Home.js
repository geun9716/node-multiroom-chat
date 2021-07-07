import React, { useEffect, useState } from 'react';
import {Menu, socket} from '../components';


const Home = () => {
  const [chats, setchats] = useState(['first msg']);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      setIsConnected(false);
    });
    socket.on('message', data => {
      setLastMessage(data);
      if (chats.length < 10)
        setchats(chats.concat(data));
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  });

  const sendMessage = () => {
    socket.emit('hello!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Connected: { '' + isConnected }</p>
        <p>socket ID: { socket.id }</p>
          <ol>
            {chats.map((val, index) => {
              return (<li key={index}>{val}</li>);
            })}
          </ol>
        <p>Last message: { lastMessage || '-' }</p>
        <button onClick={ sendMessage }>Say hello!</button>
      </header>
    </div>
  );
};

export default Home;