// import "./style.scss";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";
// function App() {
//   return (
//     <div className="App">
//     <Register/>
//     {/* <Login/> */}
//     {/* <Home/> */}
//     </div>
//   );
// }

// export default App;


// new E-Commerce website code.
import Cart from './WebPages/Cart';
import Home from './WebPages/Home';
import Login from './WebPages/Login';
import Product from './WebPages/Product';
import ProductList from './WebPages/ProductList';
import Register from './WebPages/Register';
import {  Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route  path="/login" element={user ? (<Home/>) : (<Login/> )} />
        <Route  path="/register" element={user ? (<Home/>) : (<Register/> )} />
      </Routes>
   

  )
 

};
export default App;