import React from 'react';
import {Route, Switch} from 'react-router-dom';

import "antd/dist/antd.css";
import './App.css';
import {Home, Main, Login} from './routes';
import io from 'socket.io-client';
export const socket = io('localhost:5000');

function App() {
  return (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/main" component={Main}/>
        <Route path="/login" component={Login}/>
        {/* <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
        </Switch> */}
      </div>
  );
}

export default App;
