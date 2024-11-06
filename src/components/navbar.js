import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between p-4 bg-blue-600 text-white">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <div className="flex space-x-4">
      <NavLink to="/" activeClassName="text-yellow-500">Home</NavLink>
      <NavLink to="/projects" activeClassName="text-yellow-500">Projects</NavLink>
      <NavLink to="/about" activeClassName="text-yellow-500">About</NavLink>
      <NavLink to="/contact" activeClassName="text-yellow-500">Contact</NavLink>
    </div>
  </nav>
);

export default Navbar;
