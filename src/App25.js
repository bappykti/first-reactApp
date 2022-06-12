// Routing in react
// Navigation 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './components/Routing/Pages/Blogs';
import Contact from './components/Routing/Pages/Contact';
import Error from './components/Routing/Pages/Error';
import Home from './components/Routing/Pages/Home';
import Navbar from './components/Routing/Pages/Navbar';

const App25 = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App25;