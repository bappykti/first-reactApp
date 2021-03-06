// Routing in react
// Navigation 
// useParams for dynamic routing
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { blogsData } from './Data';


const Blog = () => {
    const {title} = useParams();
    const location = useLocation();
    console.log(location);
    // const [bodyData, setBodyData] = useState("");
    // useEffect(() => {
    //   const blogData = blogsData.filter((blog)=> blog.title === title);
    //   setBodyData(blogData[0].body);
    // }, [])
    
  return (
    <div>
        <h1>{title} page</h1>
        <p>{location.state.body.slice(0,200)}</p>
        <p>{location.state.body.slice(201,500)}</p>
    </div>
  )
}

export default Blog;