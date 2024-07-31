import { Link } from 'react-router-dom'; 

const Item = ({ products }) => {

  console.log(JSON.stringify(products))
  return (
    <div className="container">

        <div className="row">
            <div className="col s12 m3">
                <div className="card hoverable">
                  
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator image-card" src={products.img} alt={products.title} />
                  </div>

                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{products.title}
                      <i className="material-icons right">more_vert</i>
                    </span>

                    <p><strong>$ {products.price}</strong></p>
                    <p>Categoría: {products.category}</p>
                    <p>Stock: {products.stock}</p>
                  </div>

                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{products.title}<i className="material-icons right">close</i></span>
                    <p>{products.description}</p>
                    <p><strong>$ {products.price}</strong></p>
                    <p>Categoría: {products.category}</p>
                    <p>Stock: {products.stock}</p>
                  </div>

                  <div className="card-action">
                    <div className='center-align'>
                      <Link className="waves-effect waves-light btn-small #039be5 light-blue darken-1" to={`/detail/${products.id}`}>Detalle del Producto</Link>
                    </div>
                  </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Item;
