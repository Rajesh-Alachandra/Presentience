import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contacts from "./Pages/Contacts";
import Register from "./Pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<Product />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
