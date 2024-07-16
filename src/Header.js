import { useState } from "react";
import {NavLink,Link, Navigate, useNavigate } from "react-router-dom";
import "./scss/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FurLogo from "./Assets/images/logo.svg";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import LoginModal from "./Component/LoginModal";
 


const Header =  () => {

  const [Mobile, setMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () =>{
     setIsOpen(true);
  }

  const closeModal = () =>{
    setIsOpen(false);
  } 
   
    
    
  return (
    <>
          
          <LoginModal  isOpen={isOpen} onClose={closeModal} />
            
           
        <div className="header-container">
        <div className="container-fluid">
          <div className="header-wrapper d-flex justify-content-between align-items-center">
            <div className="Logo-wrapper">
              <img src={FurLogo} alt="furniro" className="Logo" />
              <span className="logo-name">Furniro</span>
            </div>

            <nav className="nav_menu">
              <ul
                className={Mobile ? "nav__list_mobile" : "nav__list"}
                onClick={() => setMobile(false)}
              >
                <li className="nav__item">
                  <NavLink to="/" className="nav__link">
                    HOME
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/shop" className="nav__link">
                    SHOP
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="" className="nav__link">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="" className="nav__link">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="header-icons">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faUser}
                  className="icon"
                  width={60}
                  onClick={() => openModal(true)}
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="icon"
                  width={60}
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faHeart} className="icon" width={60} />
              </Link>
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="icon"
                  width={60}
                />
              </Link>
            </div>

            <button className="mobile-icon" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <RxCross1 /> : <HiMiniBars3BottomLeft />}
            </button>
          </div>
        </div>
        
      </div>
     
       
           
    </>
  );
};

export default Header;
