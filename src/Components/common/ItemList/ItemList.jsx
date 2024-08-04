import {memo} from 'react'
import Item from "../Item/Item"

const ItemList = ({products}) => {

  return (
    <div className="container">
        <div className="row">
          {products.map( product => <Item products={product} key={product.id} />)}  
        </div>      
    </div>
  )
}

export default memo(ItemList)