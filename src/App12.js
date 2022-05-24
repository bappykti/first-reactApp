// passing data from child to parent component
import React from 'react';

import Child from './components/STATE_LIFTING/Child';

const App12 = () => {
    const dataParent = "I am from Parent (app12)";
    const handleChildData =(childData) => {
        console.log(childData);
      
    }
  return (
    <div>
        <Child data = {dataParent} onChildData = {handleChildData} />
        
    </div>
  )
}

export default App12;