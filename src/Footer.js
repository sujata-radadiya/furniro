import React from 'react'

const Footer = () => {
  return (
   <>
   <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-3'>
         <h1 className='line1'>Funiro.</h1>
         <p className='praa'>400 University Drive Suite 200 Coral Gables,
FL 33134 USA</p>
        </div>
        <div className='col-12 col-md-3'>
          <h2>Links</h2>
          <NavLink to="/" className="nav__link">
               Home
             </NavLink>
          <p>Shop</p>
          <p>About</p>
          <p>Home</p>

        </div>
        <div className='col-12 col-md-3'>
          
        </div>
        <div className='col-12 col-md-3'>
          
        </div>
      </div>
    </div>
    </>
     
    
  )
}

export default Footer
