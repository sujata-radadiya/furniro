import React from 'react'
import fimage from './images/Group 45 (11).png'
import './scss/Footer.scss';

const Footer = () => {
  return (  
    <>
    <div className='px-5 py-5 footer-section'>
       <div className='text-center container-fluid'>
          <img src={fimage} alt='' w-100 h-100/>
        </div>
      </div>
     
    </>
  )
}

export default Footer