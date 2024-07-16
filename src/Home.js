import React from 'react'
import Header from './Header'
import Bannerimg from './Assets/images/wallbanner.jpg'
import './scss/Home.scss'
import Dining from './Assets/images/droom.jpg'
import Living from './Assets/images/Living.png'
import Bedroom from './Assets/images/broom.jpg'
import Footer from './Footer'


const Home = () => {
  return (
     <>
      
     <Header/>

      <div className='mt-4 banner-container'>
      <div className='container-fluid'>
      <div className='position-relative'>
        <img src={Bannerimg} alt='' className='w-100 h-100'/>
      </div> 

      <div className='arrival-box text-warning position-absolute top-30 end-0'>
        <div className=''>
        <h6 className='mt-3 head1'>New Arrival</h6>
        <h1 className='mt-3 head2'>Discover Our New Collection</h1>
        <p className='mt-3 para'>Furniture can impact all aspects of a space, which is one of the numerous reasons it is so important.</p>
        <div className='b-btn'>
        <button className='arrival-btn'>BUY NOW</button>
        </div>
      </div>
      </div>
      </div>

      <div className='fur-info'>
        <h2 className='heading-6 fw-bolder text-center'>Browser The Range</h2>
        <p className='prag'>Furniture, household equipment, usually made of wood, metal, plastics, marble, glass, fabrics, or related materials and having a variety of different purposes.</p>
      </div>
       

      <div className='fur-category'>
          <div className='row categories'>
            <div className='catlog col-12 col-md-4'>
              <img src={Dining} alt='' width={415}/>
              <p className='type'>Dining</p>
            </div>

            <div className='catlog col-12 col-md-4'>
              <img src={Living} alt='' width={400}/>
              <p className='type'>Living</p>
            </div>

            <div className='catlog col-12 col-md-4'>
              <img src={Bedroom} alt='' width={400}/>
              <p className='type'>Bedroom</p>
            </div>

          </div>
      </div>
      </div> 
      <Footer/>
     </>  
  )
}

export default Home