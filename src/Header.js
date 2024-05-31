import React from 'react'
import { NavLink ,Link,useLocation,Navigate, useNavigate} from 'react-router-dom';
import './scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from  '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import FurLogo from './Assets/images/logo.svg'  

const Header = () => {

   

  
  return (
     <>
      <div className='header-sec'>
     <div className="container">
      <div className='row header-wrapper d-flex justify-content-between align-items-center'>
      <div className='col-12 col-md-4 Logo-wrapper'>
        <img src={FurLogo} alt='furniro' width={55} className='Logo'/>
          <span className='logo-name'>Furniro</span> 
        </div>
         
         
       <nav className="col-12 col-md-4 justify-content-center nav_menu">

         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="" className="nav__link">
               Shop
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to=""
               className="nav__link"
             >
               About Us
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to=""
               className="nav__link"
             >
               Contact
             </NavLink>
              
           </li>
           </ul>
           </nav>

           <div className='col-12 col-md-4 header-icons'>
            <Link to='/login'>
            <FontAwesomeIcon icon={faUser} className='icon' width={60}/>
            </Link>
            <Link to='/'>
           <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' width={60} />
           </Link>
           <Link to='/'>
           <FontAwesomeIcon icon={faHeart} className='icon' width={60}/>
           </Link>
           <Link to='/'>
           <FontAwesomeIcon icon={faCartShopping} className='icon' width={60}/>
           </Link>
           </div>
           </div>
           </div>
           
           </div>
           </>
           
  )
}

export default Header