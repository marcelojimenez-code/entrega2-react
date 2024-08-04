import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, getTotal, totalQuantity, clearCart } = useCart();
    const total = getTotal()
    //console.log(total)

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
              <div class="card hoverable">
                  <div class="card-content">
                    <table>
                      <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            <th>Eliminar</th>
                        </tr>
                      </thead>

                      <tbody>
                      {cart.map((item) => (
                        <CartItem key={item.id} {...item} />
                      ))}
                      </tbody>
                    </table>
                      <div className="right-align"><h3>Total: $ {total}</h3></div>
                  </div>
                  
                  <div class="card-action center">
                      <button className="waves-effect waves-light btn-large #039be5 light-blue darken-1" onClick={clearCart}>Limpiar Carrito</button>
                      &nbsp;&nbsp;&nbsp;
                      <Link to="/checkout" className="waves-effect waves-light btn-large #039be5 light-green darken-1">
                        Terminar pedido
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Cart