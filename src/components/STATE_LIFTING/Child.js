//passing data from child to parent component

import React from 'react'

const Child = (props) => {
    const dataChild = "I am from Child component";
    props.onChildData("App : " + dataChild);
  return (
    <div>
        <p>This is from child</p>
        <p>{props.data}</p>
    </div>
  )
}

export default Child;