import React, { useState,useEffect} from 'react'
import Header from '../Header';
import bannerbg  from '../Assets/images/backimg.jpg'
import '../scss/Product.scss';
import { useNavigate } from 'react-router-dom';
import { Card } from 'reactstrap';
 


function Products(){

  const navigate = useNavigate();
  const [Items,setItems] = useState([]);
    

  const fetchData = () => {

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
      .then((data) => {
        setItems(data.products);
        console.log(data);
      });
    }



      useEffect(() => { 
        fetchData();
      }, []);
    
      const handleClick = () =>{
         navigate('/productcategory')
      }

  return (
     <>

     <Header/>

     <div className='product-info'> 
      <div className='container'>
        <img src={bannerbg} alt='' w-100 h-100 />
        <div className='row'>
          <div className='mt-5 text-center col-12'>
            <h1 className=''>Explore Essential Furniture</h1>
            <p className='h5'>Impressive Collection for Your Dream Home</p>
          </div>
          </div>

          <div className='mt-5 pro-catlog row'> 

          {
          Items.map((Item) => (
            
         <div className="py-5 pro-details col-lg-3 col-md-3 col-sm-6 col-xs-12">
           
         <div className="td1">
          <div>
          <img onClick={handleClick} src={Item.images[0]} className="pro-img" />
          <div className='product-title'>{Item.title}
          </div>
          </div>
          
             </div> 
            </div>
            

    
    
             
             
         
             
      ))}
       </div>
           
       </div>
       </div>

      
      
     </>
  )
}

export default Products