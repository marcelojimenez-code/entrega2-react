import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getProductById } from "../../../data/async-mocks"
import ItemDetail from "../ItemDetail/ItemDetail";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";



const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", productId);
        const querySnapshot = await getDoc(docRef);
        
        if (querySnapshot.exists()) {
          const productData = { id: querySnapshot.id, ...querySnapshot.data() };
          setProduct(productData);
        } else {
          console.log("No se encontró el producto");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);
  
  return (
<div className="ItemDetailContainer">
    {loading ? <h3>Cargando...</h3> :  <ItemDetail {...product} />}
</div>
  );
}

export default ItemDetailContainer