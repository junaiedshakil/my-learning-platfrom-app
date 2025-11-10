import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;