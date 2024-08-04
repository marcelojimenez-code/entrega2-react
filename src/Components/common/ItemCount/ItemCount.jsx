import React, { useState } from 'react'

const ItemCount = ({initialValue=1, stock, onAdd}) => {

    const [count, setCount] = useState(initialValue); 

    const increment = () => {
        // Incrementar la cantidad
        if (count < stock) {
            setCount(count => count + 1)
        }
        else{
            M.toast({ html: `No hay más productos en stock`, classes: 'red lighten-1' });
        }
    };

    const decrement = () => {
        // Decrementar la cantidad, asegurándose de que no sea menor que 1
        if (count > 1) {
            setCount(count => count - 1)
        }
    };  

    const handleAddToCart = () => {
        onAdd(count); // Llama a la función onAdd pasando count como argumento
    };


  return (
        <>
            <div className="card-action">
                <div className='center-align'>
                    <a className="btn-floating #ffb74d orange lighten-2 left" onClick={ decrement }><i className="material-icons">remove</i></a>
                    <span className="card-title">{count}</span>
                    <a className="btn-floating #ffb74d orange lighten-2 right" onClick={ increment }><i className="material-icons">add</i></a>
                </div>
                <br />
                <div className='center-align'>
                    <a className="waves-effect waves-light btn-small #039be5 light-blue darken-1" onClick={ handleAddToCart }>Agregar al Carro </a>
                </div>
            </div>
        </>
  )
}

export default ItemCount