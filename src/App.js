
import React from 'react';
import MainHome from './Pages/MainHome'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import ErrorPage from "./Pages/ErrorPage";
import SingleProduct from "./Pages/SingleProduct";
import CartPage from "./Pages/Cart/CartPage";
import LoginFirst from "./Pages/LoginFirst";
import Shipping from "./Pages/Shipping";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './ContextApi/CartProvider';
import FormContextProvider from './ContextApi/ContextApi';
import ScrollTop from './Pages/ScrollTop';
import { useAuth0 } from "@auth0/auth0-react";
import RoutingScroll from './Pages/RoutingScroll';





function App() {

  const {  isAuthenticated } = useAuth0();  

  return (
    <CartProvider>
      <FormContextProvider> 
      <BrowserRouter>
      <ScrollTop/>
      <RoutingScroll/>
    <Routes>
      <Route path="/" element={ <MainHome /> }></Route>
      <Route path="/about" element={ isAuthenticated? <About /> : <LoginFirst/>}></Route>
      <Route path="/products" element={ isAuthenticated ? <Products /> : <LoginFirst/>}></Route>
      <Route path="/singleproduct/:id" element={ isAuthenticated ? <SingleProduct/> : <LoginFirst/>} />
      <Route path="/contact" element={ isAuthenticated ? <Contact /> : <LoginFirst/>}></Route>
      <Route path="/cart" element={ isAuthenticated ? <CartPage /> : <LoginFirst/>}></Route>
      <Route path="/shipping" element={ isAuthenticated ? <Shipping /> : <LoginFirst/>}></Route>
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
      </FormContextProvider>
    </CartProvider>








  );
}

export default App;
