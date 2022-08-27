import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
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
  let { email, password } = e.target.elements;
  if (!email) {
    alert('Please insert password task')
    return
  }
  if (!email) {
    alert('Please insert password task')
    return
  }
  email = email.value
  password = password.value
  sendCreds({ email, password })

}

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id='password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    // <div className="form-group">
    //   <form className='add-form' onSubmit={onSubmit}>
    //     <div className='form-control'>
    //       <label>email</label>
    //       <input
    //         type='text'
    //         placeholder='Email'
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className='form-control'>
    //       <label>password</label>
    //       <input
    //         type='password'
    //         placeholder='password'
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
  
    //     <input type='submit' value='Login' className='btn btn-block' />
    //   </form>
    //   <button onClick={() => navigate('/register')}>Register!</button>
    // </div>
  )
}

export default Login