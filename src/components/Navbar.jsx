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
          <a className='navbar-brand' href='/'> </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
              <li className='nav-item '>
                <a className='nav-link active' aria-current='page' href='/'>المكتبة</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ' href='/'>اضيف حديثا</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link '>الطلبات</a>
              </li>
            </ul>
            <Search />
          </div>
        </div>
      </nav>

    </>
  )
}
