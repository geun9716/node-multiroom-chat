import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from '../components';


const Login = ({location, history}) => {
  const [nickname, setNickName] = useState('');

  const onChange = (e) =>{
    setNickName(e.target.value);
  }

  return (
    <div>
      <Menu />
      <h1>로그인</h1>
      <ul>
        <li>
          <div>
            <h3>What's your nickname?</h3>
            <input onChange={onChange} value={nickname} type="text"/>
            <button onClick={()=>{history.push({
              pathname : '/',
              state: {nickname : nickname},
            })}}>입장</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Login;