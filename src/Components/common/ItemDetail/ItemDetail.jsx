import { useCart } from "../../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
//import { useNotification } from "../../../context/NotificationContext";

const ItemDetail = ({title, img, description, stock, category, id, price}) => {
  //const {addItem, isInCart} = useContext(CartContext)
  const {addItem, isInCart} = useCart();
  //const {setNotification} = useNotification()

  const handleAdd = (count) => {
     
    const produtObj = {
      id, title,img, price, quantity: count
    } 

    addItem(produtObj)
    //setNotification("success", `Se agregaron ${count} de ${title}`);

    console.log(`Agregado al carrito: ${count} unidades de ${title}`);
  }
  
  return (
      <>
      <div className="container">
          <div className="section">

              <div className="row">

                  <div className="col s12 m4">
                      <div className="card hoverable">
                          <div className="card-image waves-effect waves-block waves-light">
                              <img className="activator image-card" src={img} />
                          </div>

                          <div className="card-content">
                              <span className="card-title activator grey-text text-darken-4">{title}
                                  <i className="material-icons right">more_vert</i></span>

                              <span>$ {price}</span>  <br/> 
                              <span>Categoria {category}</span><br/> 
                              <span>Stock {stock}</span> 
                          </div>

                          <div className="card-reveal">
                              <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                              <p>{description}</p>

                              <span>ID {id}</span>  <br/>
                              <span>$ {price}</span>  <br/> 
                              <span>Plataforma {category}</span><br/> 
                              <span>Stock {stock}</span> 
                          </div>

                            {
                              isInCart(id) ? (
                                <div className="center-align">
                                  <Link className="waves-effect waves-light btn-large #00796b teal darken-2" to='/cart'>Procesar pedido</Link>
                                  <br/><br/>
                                </div>
                              ): (
                                  <ItemCount stock={stock} onAdd={handleAdd} />
                                  )
                            }

                      </div>
                  </div>
              </div>
          </div>    
      </div>    
      </>  
  );
}

export default ItemDetail