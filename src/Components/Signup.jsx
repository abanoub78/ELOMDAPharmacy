import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { auth } from '../Firebase/firebase';
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile with username
      await updateProfile(auth.currentUser, {
        displayName: username
      });

      console.log('User signed up successfully');
      navigate('/login');
    } catch (error) {
      setError(error.message);
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className='text-center'>Sign Up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='p-10 mt-3'>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
