import { useCart } from '../../../hooks/useCart';

const CartItem = ({id, title, img, quantity, price}) => {
  const { removeItem } = useCart();
  const handleRemove = (id) => {
    removeItem(id)
  }
  return (
    <>
                
                      <tr>
                        <td><img src={img} alt={title} width="100" height="100" /></td>
                        <td>{title}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <td>${price * quantity}</td>
                        <td><button className="btn waves-effect waves-light #b71c1c red darken-4" onClick={() => handleRemove(id)}>Eliminar</button></td>
                      </tr>

    </>
  );
}

export default CartItem