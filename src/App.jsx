import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";

import Login from "./Components/pages/Login/Login";

import Layout from "./Components/Layout/Layout";
import Cart from "./Components/common/Cart/Cart";
import Checkout from "./Components/common/Checkout/Checkout";
import ItemDetailContainer from "./Components/common/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/common/ItemListContainer/ItemListContainer";


function App() {
 
  const parametros = [
    {
        titulo: 'Bienvenidos a la tienda virtual en React',
        alumno: 'Marcelo Jiménez C'
    }
  ]

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Routes>
                <Route element={<Layout />}>  
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route exact path="/detail/:productId" element={<ItemDetailContainer />}  />
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<h1>:( 404 Not found</h1>} />
                </Route>
            </Routes>  
        </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
