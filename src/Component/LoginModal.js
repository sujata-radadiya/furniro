import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Field, ErrorMessage, Form } from "formik";
import { Formik } from "formik";
import * as yup from "yup";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Navigate } from "react-router-dom";
import posterdesign from "../Assets/images/posterdesign.png";
 

const LoginModal =  ({isOpen,onClose, isComeFromProductPage}) => {

  const navigate = useNavigate(); 
  const [modal, setmodal] = useState();
  
  // const navigationPage = (data)=>{
  //   const isLoggedIn = localStorage.getItem('isLoggedIn')
  //   isLoggedIn ?
  //   navigate('/'):
  //   navigate('/cart', { state: { product: data } })
  // }
  
 

  const defaultValue = {
    username: "",
    password: ""
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("please enter your name"),
    password: yup.string().required("please enter password"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
       
      console.log("Login successful:", data);

      localStorage.setItem("isLoggedIn", true);
      
      isComeFromProductPage ? navigate('/cart', { state: { product: data } }) : navigate('/')
       
      onClose();

    } catch (error) {
      console.error("Login error:", error);
    } 
    
  };
    
   
  const ShowModal = !localStorage.getItem("isLoggedIn");

  if (!ShowModal) {
    return null; 
  }
     

      
     

  return (
    <>
       
      <div className="overlay">
        <div className="modalContainer">

          <Modal
            size="lg"
            isOpen={isOpen} 
            toggle={onClose}
            className="poster">
              
            <div className="row">
              <div className="col-12 login-left">
                <div className="col-md-6">
                  <img src={posterdesign} alt="" width={400} />
                </div>

                <div className="col-md-6 mt-4 px-3 justify-content-center text-start login-form">
                  <ModalHeader className="head">
                    Log In
                    <button className="close-button" onClick={onClose}>X</button>
                  </ModalHeader>

                  

                  <p className="head-pra">
                    Login here using your username and password
                  </p>

                  <Formik
                    initialValues={defaultValue}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <ModalBody>
                        <div className="mt-3 text-start field-set">
                          <FontAwesomeIcon
                            icon={faCircleUser}
                            className="icons"
                          />
                          <Field
                            type="text"
                            name="username"
                            placeholder="Enter your name"
                            className="form-control"
                          />

                          <p className="text-danger">
                            <ErrorMessage name="username" />
                          </p>
                        </div>

                        <div className="field-set">
                          <FontAwesomeIcon icon={faKey} className="icons" />

                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="form-control"
                          />
                        </div>

                        <div className="text-start login">
                          <button
                            onClick={Formik.handleSubmit}
                            className="log-in"
                          >
                            Login
                          </button>
                        </div>
                      </ModalBody>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
