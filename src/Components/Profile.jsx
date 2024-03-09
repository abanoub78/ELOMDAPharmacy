import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const Profile = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);
      localStorage.setItem('user', JSON.stringify(currentUser)); // Store user data in localStorage
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">User Profile</h2>
      {user && (
        <div>
          <p><strong>User Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* <p><strong>Photo URL:</strong> {user.photoURL}</p> */}
          <p><strong>Email Verified:</strong> {user.emailVerified ? 'Yes' : 'No'}</p>
          <p><strong>UID:</strong> {user.uid}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
