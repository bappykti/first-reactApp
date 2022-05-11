import React from "react";
import Card from "./components/Card";

function App(){
    return <div>
        <h1 className="headingStyle"> Todo App</h1>
        <Card titleText = "Call Mother" descText = "This is Desc 1" />
        <Card titleText = "Call Father" descText = "This is Desc 2" />
        <Card titleText = "Call Brother" descText = "This is Desc 3" />
        <Card titleText = "Call Wife" descText = "This is Desc 4" />
        <Card titleText = "Call Uncle" descText = "This is Desc 5" />
        
    </div>
   
}

export default App;
