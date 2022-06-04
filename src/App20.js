// Fragment 
import React, {Fragment} from 'react'
import Table from './components/Fragment_Table/Table';

const App20 = () => {
  return (
    // <div>
    //     {/* there are three ways to declared Fragment  */}
    //     <>
    //         <h2>I am Bappy</h2>
    //         <p>I am paragraph</p>
    //     </>
    //     <Fragment>
    //         <h2>I am Bappy</h2>
    //         <p>I am paragraph</p>
    //     </Fragment>
    //     <React.Fragment>
    //         <h2>I am Bappy</h2>
    //         <p>I am paragraph</p>
    //     </React.Fragment>
    // </div>
    <div>
        <Table />
    </div>
  )
}

export default App20;