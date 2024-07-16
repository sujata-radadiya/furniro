import React, { useState, useEffect } from 'react';
import Header from '../Header';
import bannerbg from '../Assets/images/shop.png';
import { Card } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import '../scss/Shop.scss';

function Products() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://dummyjson.com/products?&limit=100')
      .then(res => res.json())
      .then(data => {
        setItems(data.products);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  const handleClick = () => {
    navigate('/productcategory');
  };

  return (
    <>
      <Header />
      <div className='product-info'>
        <div className='container-fluid'>
          <img src={bannerbg} alt='' width={1800} />
          <div className='row'>
            <div className='mt-5 text-center col-12'>
              <h1 className=''>Explore Essential Furniture</h1>
              <p className='h5'>Impressive Collection for Your Dream Home</p>
            </div>
          </div>

          <div className='row text-center px-5 mt-5'>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              items.map(item => (
                <div key={item.id} className='col-12 col-md-3 mb-4'>
                  <Card className='h-100 text-center card-container'>
                    <div className='card-img-container'>
                      <img
                        onClick={handleClick}
                        src={item.images[0]}
                        className='card-img-top'
                        alt={item.title}
                      />
                    </div>
                    
                    <div className='card-body'>
                      <h5 className='card-title'>{item.title}</h5>
                      
                    </div>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
