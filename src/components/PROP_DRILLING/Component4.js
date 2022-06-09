// prop drilling
import React, {useContext} from 'react';
import { UserContext } from './UserContext';


const Component4 = () => {
  const {user, text} = useContext(UserContext); 
  return (
    <div>
        <h1>{user.id}</h1>
        <h2>{user.name}</h2>
        <h3>{text}</h3>
    </div>
  )
}

export default Component4;