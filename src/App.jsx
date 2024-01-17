import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Products from "./pages/products/Products";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App