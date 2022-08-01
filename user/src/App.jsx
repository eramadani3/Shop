import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user ? <Home/>: <Navigate to="/login" replace/>}/>
        <Route path="/register" element={user?<Home/>: <Navigate to="/register" replace/>}/>
      </Routes>
    </Router>
  )
};

export default App;