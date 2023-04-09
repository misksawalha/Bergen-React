import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   <>
   <footer className={`${style.myBG} my-5`}>
   <div className='container'>
    <div className='row '>
      <div className="col-md-4 my-5">
        <h5>Bergen</h5>
        <h6>123 Demo Street</h6>
        <h6>Brooklyn, NY 12345</h6>
      </div>

      <div className="col-md-4 my-5">
        <h5>About</h5>
        <ul className='list-inline'>
          <li className='list-unstyled '><Link className='text-dark' to='work ' >Work</Link></li>
          <li className='list-unstyled '><Link className='text-dark' to='about' >Who We Are</Link></li>
          <li className='list-unstyled '><Link className='text-dark' to='contact' >Contact Us</Link></li>
        </ul>
      </div>

      <div className="col-md-4 my-5">
        <h5>About</h5>
        <ul className='list-inline'>
          <li className='list-unstyled '><Link className='text-dark' to='Residential' >Residential Design</Link></li>
          <li className='list-unstyled '><Link className='text-dark' to='Commercial' >Commercial Design</Link></li>
          <li className='list-unstyled '><Link className='text-dark' to='Experiential' >Experiential Design</Link></li>
        </ul>
      </div>


    </div>
   </div>
   </footer>
   
    
   </>
  )
}
