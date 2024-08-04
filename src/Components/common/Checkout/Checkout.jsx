import { useState } from "react"
import { useCart } from "../../../hooks/useCart"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../../services/firebase/index"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)

    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal()


    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: "Marcelo",
                    lastName: "Jimenez",
                    phone: "123456789",
                    address: "Fernando Rioja 103"
                }, 
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }

            const ids = cart.map((item)=> item.id)
            //console.log(ids)

            const productRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids)))
                const { docs } = productsAddedFromFirestore;

                const outOfStock = []
                const batch = writeBatch(db)

                docs.forEach((doc)=>{
                    const dataDoc = doc.data()
                    const stockDB = dataDoc.stock

                    const productAddedToCart = cart.find((prod) => prod.id === doc.id)
                    const productQuantity = productAddedToCart?.quantity;

                    if(stockDB >= productQuantity){
                        batch.update(doc.ref, {stock: stockDB - productQuantity})
                    }else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })

                if(outOfStock.length === 0){
                    await batch.commit()

                    const orderRef = collection(db, "orders")
                    const orderAdded = await addDoc(orderRef, objOrder);
                    console.log(`El id de su orden es ${orderAdded.id}`);
                    // limpiar el carrito
                    
                    setOrderCreated(true)
                    clearCart()
                }else {
                    // falta logica de compra o encargo de productos
                    console.log("Hay productos que estan fuera de stock")
                }
        }catch(error){
            console.log("")
        }finally {
            setLoading(false)
        }

        if(loading){
            return <h1>Se esta generando la orden</h1>
        }

        if(orderCreated){
            return <h1>La orden fue creada correctamente</h1>
        }
    }
  return (
    <>
    <div className="container">
       <div className="row">
          <div class="card">
            <div class="card-content">
                <table>
                  <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                        <td><img src={item.img} alt={item.title} width="100" height="100" /></td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price}</td>
                        <td>${item.price * item.quantity}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div class="card-action center">
                  <button className="waves-effect waves-light btn-large #039be5 light-green darken-1" onClick={createOrder}>
                      Generar Orden
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout