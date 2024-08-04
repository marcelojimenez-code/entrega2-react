import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/firebase/firestore/products";
import { useAsync } from "../../../hooks/useAsync";
//import { useNotification } from "../../../context/NotificationContext";

function ItemListContainer({greetings}) {
  const {categoryId} = useParams()
  const [selectedCategory, setSelectedCategory] = useState(categoryId || "");
  const [categories, setCategories] = useState([]);

  const asyncFunction = () => getProducts()

  const { data: allProducts, loading, error } = useAsync(asyncFunction, []);

  useEffect(() => {
    // Obtener todas las categorías únicas de los productos
    if (allProducts) {
      const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
      setCategories(uniqueCategories);
    }
  }, [allProducts]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory
  ? allProducts?.filter(product => product.category === selectedCategory)
  : allProducts;


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
    //setNotification("warning", `Cargando productos...`);
  }

  if(error) {
    return (
      <h3
        style={{
          color: "white",
          backgroundColor: "#d68fff",
          textAlign: "center",
        }}
      >
        Error al cargar los productos
      </h3>
    );
  }

return (
  <>
    <br/> 
    <div className="container">
    <div className="row">
        <div className="col s12">
          <select className="browser-default" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Mostrar todos</option>
            <option value="switch">Switch</option>
            <option value="xbox">Xbox</option>
            <option value="PS5">PS5</option>
          </select>
          <label>Filtrar por categoría</label>
        </div>
      </div>
    </div>

    <ItemList products={filteredProducts} />
  </>
);
}

export default ItemListContainer