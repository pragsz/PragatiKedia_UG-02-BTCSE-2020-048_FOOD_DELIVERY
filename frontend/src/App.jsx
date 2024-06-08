import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
// import MyOrders from './pages/MyOrders/MyOrders';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  
  const [showLogin,setShowLogin]=  useState(false)

  return (
    <>
      {showLogin ?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          {/* <Route path='/myorder' element={<MyOrders />} /> */}
        </Routes>
      </div>
      <Footer />

    </>
  );
};

export default App;
