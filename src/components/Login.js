import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../services/UserService'

const Login = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('')
const [password, setPassword] =  useState('');

const sendCreds = async (creds) => {
  await UserService.LogIn(creds).then((res) => {
    if (res.data.message) {
      console.log(res.data.message);
      return;
    }
    console.log(res);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    navigate('/store');
  })
}

const onSubmit = (e) => {
  e.preventDefault()

  if (!email) {
    alert('Please insert email task')
    return
  }

  sendCreds({ email, password })

}

  return (
    <div>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>email</label>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>password</label>
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <input type='submit' value='Login' className='btn btn-block' />
      </form>
      <button onClick={() => navigate('/register')}>Register!</button>
    </div>
  )
}

export default Login