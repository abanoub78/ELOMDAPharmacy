import React from 'react';
import { auth } from '../Firebase/firebase';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  auth.signOut().then(() => {
    console.log('User logged out successfully');
    localStorage.removeItem('user')
    // You can redirect the user to another page after logout if needed
  }).catch((error) => {
    console.error('Error logging out:', error.message);
  });

  // Redirect to login page after logout
  return <Navigate to="/login" />;
};

export default Logout;
