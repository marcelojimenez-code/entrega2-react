import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNotification } from "../../../context/NotificationContext";

function ItemListContainer({greetings}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  const notificationContext = useNotification()
  
  useEffect(()=>{
    setLoading(true)
    const collectionRef = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products")
    
    getDocs(collectionRef)
      .then((querySnapshot)=>{
        const products = querySnapshot.docs.map((doc)=>{
          return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
      })
    .catch((error) => {
      console.error("Error al cargar productos:", error)
      if (notificationContext && notificationContext.setNotification) {
        notificationContext.setNotification("danger", `No es posible cargar los productos`)
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  },[categoryId, notificationContext])

  if(loading) {
    return (
      <h3
        style={{
          color: "white",
          backgroundColor: "#d68fff",
          textAlign: "center",
        }}
      >
        Cargando productos...
      </h3>
    );
  }

return (
  <>
    <h2>{greetings}</h2>
    <ItemList products={products} />
  </>
);
}

export default ItemListContainer