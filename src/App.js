import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Route,Routes,NavLink,Router, Navigate} from 'react-router-dom';
import Product from './Component/Product';
import Footer from './Footer';


function App() {
  return (
    <>
     <BrowserRouter>
        
        
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='header' element={<Header/>} />
         <Route path='/product' element={<Product/>}/>
         <Route path='/footer' element={<Footer/>}/>
      </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
