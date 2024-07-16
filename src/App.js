import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Route,Routes,NavLink,Router, Navigate} from 'react-router-dom';
import Shop from './Component/Shop'
import ProductCategory from './Component/ProductCategory';
import Product from './Component/Product';
import Footer from './Footer';
import Cart from './Cart/Cart';
import LoginModal from './Component/LoginModal';
 


function App() {
  return (
    <>
      
     <BrowserRouter>
      
        
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='header' element={<Header/>} />
         <Route path='loginmodal' element={<LoginModal/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/productcategory' element={<ProductCategory/>}/>
         <Route path='/product/:id' element={<Product/>}></Route>
         <Route path='/cart/' element={<Cart/>}></Route>
         <Route path='/footer' element={<Footer/>}/>
      </Routes>

       
      </BrowserRouter>
      
    </>
  );
}

export default App;
