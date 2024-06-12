import React, { useState,useEffect} from 'react'
import Header from '../Header';
import bannerbg  from '../Assets/images/backimg.jpg'
import '../scss/Product.scss';


function Product(){

  const [Item,setItem] = useState([]);

  const fetchData = () => {

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
      .then((data) => {
        setItem(data.products);
      });
    }

      useEffect(() => { 
        fetchData();
      }, []);
    

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


 
          {
          Item.map((Item) => (
         <tr key={Item.id} > 
         
         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" data-aos="fade- 
           right">
         <td className="td1">
          <img src={Item.images} className="pro-img">
            </img></td>
            </div>

            <td className="td1">{Item.title}</td>
            <td className="td1">{Item.price}</td>
            <td className="td1">{Item.rating}</td>
            <td className="td1">{Item.stock}</td>
             
             </tr>
      ))}
       
           
      </div>

     </div>
     </div>
     </>
  )
}

export default Product