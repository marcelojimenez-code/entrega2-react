import React from 'react'
import {Link} from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

const CartWidget = () => {
  const {totalQuantity} = useCart()

  const links_carro = [
    {
        id: 6,
        link: 'Carrito',
        url: 'cart'
    },
    {
        id: 7,
        link: 'Total',
        url: 'checkout'
    },
  ] 

  return (

    <>
      <li key={links_carro[0].id}><Link className="navbar-item" to={links_carro[0].url}><i className="material-icons">shopping_cart</i></Link></li>
      <li key={links_carro[1].id}><Link className="navbar-item" to={links_carro[1].url}>{links_carro[1].link}<span className="new badge blue">{totalQuantity}</span></Link></li>
    </>

  )
}

export default CartWidget
