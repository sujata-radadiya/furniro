import React, {useState,useEffect,useContext} from 'react'
import { Button } from 'reactstrap'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Context/Context';

const Product = () => {

  const {id} = useParams()
  console.log(id);

  const { addToCart } = useContext(CartContext);

  const [product,setProduct] =  useState([])
   
  

  const fetchData = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  };

    
  useEffect(() => {
    fetchData();
  }, []);
 
   console.log(product);
  return (
     <>

     <Header/>
     <div className='container'>
     <div key={product.id}>

      <div className='row'>
        <div className='col-lg-6 mt-5'>
        <img src={product.images} class="card-img-top" alt="" />
        </div>

        <div className='col-lg-6 mt-5'>
         
          <h4 className="card-category">{product.category}</h4>
          <h1 className="card-title">{product.title}</h1>
          <p className='fw-bolder' style={{color:"#FFA41C"}}> {product.rating} 
           
          
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} /></p>
          <h3>${product?.price}</h3>
          <h5 className='status'>{product.availabilityStatus}</h5> 
          <p>{product.description}</p>
          <p className="discount">discount per : {product.discountPercentage}</p>
          <p className="policy">{product.returnPolicy}</p>
          <p className="w-info">{product.warrantyInformation}</p>
          <p className="weight">weight : {product.weight}</p>
          <Button variant="dark" onClick={() => addToCart(product)} >Add to Cart</Button>
          <Button className='ms-3' variant="dark">Go to Cart</Button>
        </div>
        </div>
         
      </div>
     </div>
     </>
  )
}


export default Product