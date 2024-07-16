import React, {useState,useEffect,useContext} from 'react'
import { Button } from 'reactstrap'
import { useParams,useNavigate } from 'react-router-dom'
import Header from '../Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal';
import Skeleton from 'react-loading-skeleton';

const Product = () => {

  const {id} = useParams()
   const navigate = useNavigate();
   console.log(id);

  
  const [product,setProduct] =  useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [isComeFromProductPage, setIsComeFromProductPage] = useState(false);

  const openModal = () =>{
     setIsOpen(true);
  } 

  const closeModal = () =>{
    setIsOpen(false);
  } 
   
  const fetchData = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
       setIsLoading(false);
         
      });
    }
      useEffect(() => {
        fetchData();
      }, []); 

      const handleAddToCart = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        console.log("isLog",isLoggedIn)
        if (isLoggedIn) {
          addToCart(product);
        } else {
          openModal();
          // console.log("islog",isLoggedIn)
          // addToCart({ id: product.id });
          setIsComeFromProductPage(true);
          
        }
      }

    
      const addToCart = (product) => {
        navigate('/cart', { state: { product } });
      };

  return (
     <>

     <Header/>

      <LoginModal  isOpen={isOpen} onClose={closeModal}  isComeFromProductPage={isComeFromProductPage}  />

     <div className='container'>
     {isLoading ? ( // Display skeleton or loading spinner while loading
          <div className='row'>
            <div className='col-lg-6 mt-5'>
              <Skeleton height={400} />
            </div>
            <div className='col-lg-6 mt-5'>
              <Skeleton count={5} />
            </div>
          </div>
        ) : (
     <div key={product.id}>

      <div className='row'>
        <div className='col-lg-6 mt-5'>
        <img src={product.images} class="card-img-top" alt="" />
        </div>

        <div className='col-lg-6 mt-5'>
         
          <h4 className="card-category">{product.category}</h4>
          <h1 className="card-title">{product.title}</h1>
          <p className='fw-bolder' style={{color:"#FFA41C"}}> 
          {product.rating && Array.from(Array(parseInt(product.rating)), (_, index) => (
                <FontAwesomeIcon icon={faStar} key={index} />
              ))}
            </p>
      
          <h3>${product?.price}</h3>
          <h5 className='status'>{product.availabilityStatus}</h5> 
          <p>{product.description}</p>
          <p className="discount">discount per : {product.discountPercentage}</p>
          <p className="policy">{product.returnPolicy}</p>
          <p className="w-info">{product.warrantyInformation}</p>
          <p className="weight">weight : {product.weight}</p>
          <Button variant="dark" onClick={handleAddToCart} >Add to Cart</Button>
          <Button className='ms-3' variant="dark">Go to Cart</Button>
        </div>
        </div>
         
      </div>
     )}
     </div>
     </>
  )
}


export default Product