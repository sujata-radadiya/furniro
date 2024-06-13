import React, {useEffect,useState} from 'react'
import Header from '../Header';
import bannerbg from '../Assets/images/backimg.jpg'
import { Navigate,useNavigate } from 'react-router-dom';

const ProductCategory = () => {
  const navigate = useNavigate();
  const [Catlog,setCatlog] = useState([]);
    

  const fetchData = () => {

    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
      .then((data) => {
        setCatlog(data);
        console.log(data);
        
        
      });
    }

      useEffect(() => { 
        fetchData();
      }, []);
    

      const handleClick = () =>{
        navigate('/')
     }
      
  return (
     <>

     <Header/>

     <div className='product-info'> 
      <div className='container'>
        <img src={bannerbg} alt='' w-100 h-100 />
        <div className='row'>
          <div className='mt-5 text-center col-12'>
            <h1 className=''>Popular Picks in Sofa Sets</h1>
             
          </div>
          </div>

          <div className='mt-5 pro-catlog row'> 

          {
             Catlog.map((Catlog) => (
         
         <div className="py-5 pro-details col-lg-5 col-md-3 col-sm-6 col-xs-12">
           
         <div className="td1" onClick={handleClick}>
          <div>
          <div className=''>{Catlog.slug}
          <div className='product-title'>{Catlog.name}
          <div className=''>{Catlog.url} 
          </div>
          </div>
          
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
  
   

export default ProductCategory