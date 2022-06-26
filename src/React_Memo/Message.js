import React, { memo } from 'react';

const Message = ({numberOfMessages}) => {
    console.log("Rendering Message");
  return (
    <div>
        <h2>Message {numberOfMessages} Count</h2>

    </div>
  )
}

export default memo(Message);