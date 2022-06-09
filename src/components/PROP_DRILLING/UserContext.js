// Do prop drilling using user context

import React from 'react';

export const UserContext = React.createContext();

// useContext is a hook for creating global state trough which we can access data without prop drilling

// useContext provided two things 
// 1. Provider
// 2. Consumer  

// how it works
// step 1 : - create context
// step 2 :- wrap child with context provider
// step 3 :- state access useContext hook