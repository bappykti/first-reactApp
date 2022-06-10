// Prop Types
import React, { useState } from 'react';
import User from './User';

const Users = () => {
    const [user, setUser] = useState({
        id : 1333589652,
        name : "Kazi Tanvirul Islam"
    });
   
  return (
    <div>
        <User user={user} />
    </div>
  )
}

export default Users;