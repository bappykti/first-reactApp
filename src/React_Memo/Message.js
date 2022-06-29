// React Memo
// Callback function
import React, { memo } from 'react';

const Message = ({numberOfMessages, onHandleIncrement}) => {
    console.log("Rendering Message");
  return (
    <div>
        <h2>Message {numberOfMessages} Count</h2>
        <button onClick={onHandleIncrement}>Increment Message Number</button>

    </div>
  )
}

export default memo(Message);