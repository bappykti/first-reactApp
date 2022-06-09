// prop drilling
import React from 'react'
import Component4 from './Component4'

const component3 = ({user}) => {
  return (
    <div>
        <Component4 user={user} />
    </div>
  )
}

export default component3;