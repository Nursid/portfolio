import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo.png'
function Navbar() {
    return (
  
       <nav className="navbar navbar-expand-lg ">
   
   <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt=""  height={50}/>
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav mx-auto ">
          <li className="nav-item ">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/project">Project</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/resume">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
  }
  
  export default Navbar;
  