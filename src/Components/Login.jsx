import React, { useState } from 'react';
import { auth } from '../Firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  function getuserdata(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,user.email, user.password);
      console.log('User signed in successfully');
      navigate('/');

    } catch (error) {
      setError(error.message);
      console.error('Error signing in:', error.message);
    }
  }

  return (
    <div className="container mt-5">
      <h2 className='text-center'>Sign in</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input className='form-control mb-2' id='email' onChange={getuserdata} name='email' placeholder='Enter your email' />

        <label htmlFor='password'>Password:</label>
        <input className='form-control mb-2' type='password' id='password' onChange={getuserdata} name='password' placeholder='Enter your password' />

        <button className='btn btn-primary' type='submit'>Login</button>
      </form>
    </div>
  );
}
