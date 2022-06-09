// prop drilling
import React from 'react'

const Component4 = ({user}) => {
  return (
    <div>
        <h1>{user.id}</h1>
        <h2>{user.name}</h2>
    </div>
  )
}

export default Component4;