  import React, { useState } from "react";
  import "./App.css";
  import NavbarComponent from "./components/NavbarComponent";
  import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

  import menuData from "./data/data";
  import MenuCard from "./components/Card";
  import ShoppingCart from "./components/Cart";  

  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { toast } from "react-toastify";
  import Login from "./pages/Login";
  import Signup from "./pages/Signup";

  const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);


    const handleAddToCart = (item) => {
      if (cartItems.some((cartItem) => cartItem.id === item.id)) {
        toast.warning(`${item.name} is already in the cart!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        setCartItems((prevItems) => [...prevItems, item]);
    
        toast.success(`${item.name} added to the cart!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    };
    
    const onUpdateQuantity = (itemId, newQuantity) => {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.min(newQuantity, 10) } : item
      );

      const finalCartItems = updatedCartItems.filter((item) => item.quantity >= 1);

      setCartItems(finalCartItems);
    };

    const onDeleteItem = (itemId) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    };




    const onRefresh = () => {
      const refreshedCartItems = cartItems.map((item) => ({ ...item, quantity: 1 }));
    
      setCartItems(refreshedCartItems);
    
      toast.success("Cart items refreshed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    };
    const handleLogin = (user) => {
      setLoggedIn(true);
      toast.success(`Welcome, ${user.email}!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    };
  
    const handleLogout = () => {
      setLoggedIn(false);
      setCartItems([]); 
      toast.info("Logged out successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    };

    return (
      <Router>
      <div className="App">
        {isLoggedIn && <NavbarComponent onLogout={handleLogout} />}
        <Routes>
          <Route path="/breakfast" element={<MenuCard menuItems={menuData.breakfast} onAddToCart={handleAddToCart} />} />
          <Route path="/lunch" element={<MenuCard menuItems={menuData.lunch} onAddToCart={handleAddToCart} />} />
          <Route path="/dinner" element={<MenuCard menuItems={menuData.dinner} onAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={isLoggedIn ? <ShoppingCart cartItems={cartItems} onUpdateQuantity={onUpdateQuantity} onDeleteItem={onDeleteItem} onRefresh={onRefresh} /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
            exact={true}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
    );
  }

  export default App;
