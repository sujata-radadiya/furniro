import React, {useState,useEffect} from 'react'
import { Button } from 'reactstrap'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import {fastar} from '@fortawesome/free-solid-svg-icons'

const Product = () => {

  const {id} = useParams()
  console.log(id);

  const [product,setProduct] =  useState([])
  const [loading,setLoading] = useState(false)

  

  const fetchData = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
         
      });
  };

    

  useEffect(() => {
    fetchData();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProducts = () =>{
  return (
     <>
     <div className='container'>
      <div className='row'>
        <div className='col-lg-6 mt-5'>
        <img src={product.images[0]} class="card-img-top" alt="" />
        </div>

        <div className='col-lg-6 mt-5'>
          <h4 className="card-category">{product.category}</h4>
          <h1 className="card-title">{product.title}</h1>
          <p className='fw-bolder'>Rating {product.rating} <FontAwesomeIcon icon={faStar} /></p>
          <h3>${product?.price}</h3>
          <p>{product.description}</p>
          <Button variant="dark">Add to Cart</Button>
          <Button className='ms-3' variant="dark">Go to Cart</Button>
        </div>
      </div>
     </div>
     </>
  )
}

return(
  <>
     
    <Header />

 
  <div className="container">
     
      {loading ? <Loading/> : <ShowProducts/>}
    </div>
   </>
)
}
export default Product