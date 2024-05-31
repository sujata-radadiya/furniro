import { useState,useEffect,useContext } from 'react-router-dom'
import Header from './Header'
import bbanner from './Assets/images/bgwall.png'
import FurLogo  from './Assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-regular-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'
import { Formik,Form,Field ,ErrorMessage} from "formik";
import * as yup from 'yup'
import './scss/Login.scss'
 

const Login = () => {

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
    <Header/>
    
    <div className='container'>
    <div className='sign-banner'>
    <img src={bbanner} alt='' width={2000} height={300} /> 
    <div className='sign-img'>
    <img src={FurLogo} alt='furniro' width={60} className='Logo'/> 
    <h2 className='sign-info'>Sign In</h2>
    </div>
    </div>
     
 

    <div className="text-center login-form">

      <h2 className='head text-center'>Log In</h2>
      <p className='head-pra'>Login here using your username and password</p>
      
    
    <Formik initialValues={defaultValue}
      validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >

      <Form> 

      <div className="field-set">
         
         <Field type="text"
            name="username"
            placeholder="Enter your name"
            className="form-control"
            />
            <FontAwesomeIcon icon={faCircleUser} className='icons'/>
            
            <p className="text-danger">
            <ErrorMessage name="username"/>
           </p>
           
        </div>
      

      <div className="field-set">
       
       <Field 
            type="password"
            name="password"
            placeholder="Enter your password"
            className="form-control"
            
          />
          <FontAwesomeIcon icon={faKey} />
          
           <p className="text-danger">
            <ErrorMessage name="password"/>
          </p>

     <span>
     <FontAwesomeIcon icon={faEye} />
     </span>
      <br/>
      </div>
 
      <div className="pl-5 px-5 login">
        <button onClick={Formik.handleSubmit} className="log-in">
           Submit </button>
           </div>
   </Form>
   </Formik>
   </div>
   </div>
    
  
   </>
  )
}
   
    
export default Login