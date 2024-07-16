import React, { useEffect, useState } from "react";
import Header from "../Header";
import bannerbg from "../Assets/images/procomresoin.png";
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../scss/ProductCategory.scss';

const ProductCategory = () => {

  const {} = useParams();
  const [catlog, setCatlog] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products?&limit=100")
      .then((res) => res.json())
      .then((data) => {
        // setCatlog(data);
        setCatlog(data.products);
        setFilter(data.products);
        setLoading(false);
      });
  };
  
  

  const Loading = () => {
    return <>Loading....</>;

  };

  

  const filterProducts = (cat) => {
    const updateItem = catlog.filter((item) => item.category === cat);
    setFilter(updateItem);
    setSelectedCategory(cat); 
  };

  

  const ShowProducts = () => {
    return (
      <>
       
        {filter.map((item) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card h-100 text-center p-4">
                <card key={item.id}>
                    <img src={item.images[0]} class="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {item.title.substring(0, 12)}...
                      </h5>
                      <p className="card-description">
                        {item.description}Some quick example text to build on
                        the card title and make up the bulk of the card's
                        content.
                      </p>
                      <p className="card-category">{item.category}</p>
                      <h2 className="card-price lead fw-bold">${item.price}</h2>
                      <h3 className="card-rating">{item.rating}</h3>
                      <h4 className="card-stock">{item.stock}</h4>
                      <Link to={`/Product/${item.id}`}><Button variant="dark">Buy Now</Button></Link>
                    </div>
                  </card> 
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

   

  return (
    <>
      <Header />

      <div className="product-info">
        <div className="container-fluid">
          <img src={bannerbg} alt="" width={1800} />
          <div className="row">
            <div className="mt-5 text-center col-12">
              <h1 className="">Popular Picks in Sofa Sets</h1>
            </div>
          </div>
          <div className="buttons d-flex justify-content-center py-5 mb-5 pb-5">
          <button
              className={`btn btn-outline-dark me-5 category-button
               ${
                selectedCategory === null ? 'selected' : '' }`}
              onClick={() => {
                setFilter(catlog);
                setSelectedCategory(null);
              }}
            >
              All
            </button>

            <button
              className={`btn btn-outline-dark me-5 category-button
               ${
                selectedCategory === "beauty" ? 'selected' : ''
              }`}
              onClick={() => filterProducts("beauty")}
            >
              Beauty
            </button>

            <button
              className={`btn btn-outline-dark me-5 category-button 
              ${
                selectedCategory === "fragrances" ? 'selected' : ''
              }`}
              onClick={() => filterProducts("fragrances")}
            >
              Fragrances
            </button>

          <button
              className={`btn btn-outline-dark me-5 category-button
               ${
                selectedCategory === "furniture" ? 'selected' : ''
              }`}
              onClick={() => filterProducts("furniture")}
            >
              Furniture
            </button>

          <button
              className={`btn btn-outline-dark me-5 category-button 
              ${
                selectedCategory === "groceries" ? 'selected' : ''
              }`}
              onClick={() => filterProducts("groceries")}
            >
              Groceries
            </button>

          <button
              className={`btn btn-outline-dark me-5 category-button 
              ${
                selectedCategory === "home-decoration" ? 'selected' : ''
              }`}
              onClick={() => filterProducts("home-decoration")}
            >
              Home-decoration
            </button>

           <button
              className={`btn btn-outline-dark me-5 category-button 
              ${
                selectedCategory === "kitchen-accessories" ? 'selected' : ''
              }`}
              onClick={() => filterProducts("kitchen-accessories")}
            >
              Kitchen-accessories
            </button>
        </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
