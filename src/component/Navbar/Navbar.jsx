import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Navbar.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
//onChange={e=>setData(e.target.value)}
export default function Navbar() {
  let navigate=useNavigate();
  let output;
  let path;
  
  function setData(e){
    output=e.target.value;
    path=(`/${output}`)
    console.log(path)
    if(path=='/Residential'){
      navigate(path);
  }
  else if(path=='/Commercial'){
    navigate(path);
    }
    else if(path=='/Experiential'){
      navigate(path);
      }
    else if(path=='/Design'){
        navigate('/work');
        }
}
 
  return (
   <>
   
   <nav className="navbar navbar-expand-lg bg-transperent ">
  <div className="container-fluid">
    <a className="navbar-brand fs-1" href="#">Bergen</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="work">Work</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.navBarHover}`} to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="service">Our Service</Link>
        </li>
        <select title='Project' className='dropdown-toggle' variant="dark" onChange={setData} >
           <option>Design</option>
            <option > Residential</option>
            <option > Commercial </option>
            <option > Experiential </option>
          </select>
        
        <li className="nav-item">
          <Link className="nav-link " to="contact">Contact Us</Link>
        </li>
        
         
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}
