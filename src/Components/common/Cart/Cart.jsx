import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, getTotal, totalQuantity } = useCart();
    const total = getTotal()
    console.log(total)

    if(totalQuantity === 0){
        return <div className="container">
                  <div className="row">
                      <h1>No hay items en el carrito</h1>
                  </div>
                </div>
    }
  return (
    <>
      <div className="container">
        <div className="row">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <h3 style={{ textAlign: "center" }}>Total: $ {total}</h3>
          
          <div className="d-flex justify-content-center ">
                <button className="waves-effect waves-light btn-small #039be5 light-blue darken-1">Limpiar Carrito</button>
                <Link to="/checkout" className="waves-effect waves-light btn-small #039be5 light-green darken-1">
                  Checkout
                </Link>
          </div>
      </div>
      </div>
    </>
  );
}

export default Cart