import { useState } from "react";
import {NavLink,Link } from "react-router-dom";
import "./scss/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FurLogo from "./Assets/images/logo.svg";
import posterdesign from './Assets/images/posterdesign.png'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'
import { Field, ErrorMessage, Form } from "formik";
import { Formik } from "formik";
import * as yup from "yup";

const Header = () => {
  const [Mobile, setMobile] = useState(false);

  const [modal, setmodal] = useState(false);


  const defaultValue = {
    username:"",
    password:""
  }

  const validationSchema = yup.object().shape({
      username:yup.string().min(2, 'Too Short!')
      .max(50, 'Too Long!').required("please enter your name"),
      password:yup.string().required("please enter password")
  })

  const handleSubmit = (values)=>{
    console.log(values);
  }
  return (
    <>
        
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)} className="poster">

        <div className="row">
          <div className="col-12 login-left">
            <div className="col-md-6">
              <img src={posterdesign} alt=""  width={400} />
            </div>
         
        
         
          <div className="col-md-6 mt-4 px-3 justify-content-center text-start login-form">
            <h2 className="head">Log In</h2>
            <p className="head-pra">
              Login here using your username and password
            </p>
           
 
        <Formik initialValues={defaultValue}
      validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >

      <Form> 
        <ModalBody>
          <div className="mt-3 text-start field-set">
          <FontAwesomeIcon icon={faCircleUser} className='icons'/>
            <Field
              type="text"
              name="username"
              placeholder="Enter your name"
              className="form-control"
            />

            <p className="text-danger">
                    <ErrorMessage name="username"/>
                   </p>
          </div>

          <div className="field-set">
          <FontAwesomeIcon icon={faKey} className='icons' />
            
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
            />
          </div>

          <div className="text-start login">
            <button onClick={Formik.handleSubmit} className="log-in">
              Submit{" "}
            </button>
          </div>
          
          </ModalBody>
        </Form>
        </Formik>
        </div>
        </div>
        </div>
      </Modal>
       
       

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
                  <NavLink to="/Products" className="nav__link">
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
              <Link to="">
                <FontAwesomeIcon
                  icon={faUser}
                  className="icon"
                  width={60}
                  onClick={() => setmodal(true)}
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
