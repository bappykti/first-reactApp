// Routing in react
// Navigation 
// useParams for dynamic routing
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './components/Routing/Pages/Blogs';
import Blog from './components/Routing/Pages/Blog';
import Contact from './components/Routing/Pages/Contact';
import Error from './components/Routing/Pages/Error';
import User from './components/Routing/Pages/User';
import Home from './components/Routing/Pages/Home';
import Navbar from './components/Routing/Pages/Navbar';

const App25 = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/user" element={<User />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App25;