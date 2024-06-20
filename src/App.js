import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Route,Routes,NavLink,Router, Navigate} from 'react-router-dom';
import Products from './Component/Products';
import ProductCategory from './Component/ProductCategory';
import Product from './Component/Product';
import Footer from './Footer';
import Cart from './Cart/Cart';
import { CartProvider } from './Context/Context';


function App() {
  return (
    <>
   
     <BrowserRouter>
     <CartProvider>
        
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='header' element={<Header/>} />
         <Route path='/products' element={<Products/>}/>
         <Route path='/productcategory' element={<ProductCategory/>}/>
         <Route path='/product/:id' element={<Product/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/footer' element={<Footer/>}/>
      </Routes>

      </CartProvider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
