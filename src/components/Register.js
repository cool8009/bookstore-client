import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../services/UserService'

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const sendCreds = async (creds) => {
    await UserService.Register(creds).then((res) => {
      if (res.data.message) {
        console.log(res.data.message);
        return;
      }
      console.log(res);
      alert('please log in with your account.')
      navigate('/login');
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    let { email, password, firstName, lastName } = e.target.elements;
    if (!email) {
      alert('Please insert email ')
      return
    }
    if (!password || password.length < 5 || password.length > 15) {
      alert('Please insert password ')
      return
    }
    if (!firstName) {
      alert('Please insert firstName ')
      return
    }
    if (!lastName) {
      alert('Please insert lastName ')
      return
    }


  
    sendCreds({ email, password, firstName, lastName })
  
  }

  return (

      <Container fluid="sm">
      <Form onSubmit={onSubmit} >

        <Form.Group  className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id='email'/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='password'/>
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" id='firstName'/>
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" id='lastName'/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button onClick={() => navigate('/')}>Back To Login</Button>
    </Container>




      /* <form className='add-form' onSubmit={onSubmit}>
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
        <div className='form-control'>
          <label>first name</label>
          <input
            type='text'
            placeholder='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>last name</label>
          <input
            type='text'
            placeholder='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
  
        <input type='submit' value='Register' className='btn btn-block' />
      </form>
      <button onClick={() => navigate('/')}>Login To Your Account</button>
    </div> */
  )
}

export default Register