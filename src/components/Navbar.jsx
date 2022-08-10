import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import Search from './Search/Search';

export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <div className='container-fluid '>
          <NavLink className='navbar-brand' to='/' end><img src={logo} alt='الشعار' /></NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
              <li className='nav-item '>
                <NavLink className='nav-link' to='/archive' aria-current='page'>المكتبة</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/latest'>اضيف حديثا</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/requests'>الطلبات</NavLink>
              </li>
            </ul>
            <Search />
            
          </div>
        </div>
      </nav>

    </>
  )
}
