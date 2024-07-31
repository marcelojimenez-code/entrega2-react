import React from 'react';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import Cart from "./Components/common/Cart/Cart";
import Checkout from "./Components/common/Checkout/Checkout";
import ItemDetailContainer from "./Components/common/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/common/ItemListContainer/ItemListContainer";

import { CartProvider } from "./context/CartContext";

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
        <CartProvider>
            <Routes>
                <Route element={<Layout />}>  
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route exact path="/detail/:productId" element={<ItemDetailContainer />}  />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>  
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
