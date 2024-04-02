import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from "./components/Footer/Footer";
import men_banner from './components/Assets/images8.jpg'
import women_banner from './components/Assets/im3.jpg'
import kids_banner from './components/Assets/img1.webp'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/LoginSignup' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
