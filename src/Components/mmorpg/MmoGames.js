import React from 'react'
import { ShoppingUseContext } from '../Contexts/Contexts'
const MmoGames =({id , name , img , price , alt }) => {
  const {  gamesQuantity, increament, decrement, removeItems  } = ShoppingUseContext()
  const quantity = gamesQuantity(id)
  return (
    <div className='games-container'>
        <div className='images'>
            <img src={img} alt={alt} className="image" />
        </div>
        <div className='games-info'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <div className='buttons'>
        {quantity === 0 ? <button className='add' onClick={()=>increament(id)}>Add to Cart</button> : 
        <div>
          <div>
            <button className='decrement' onClick={()=>decrement(id)}>-</button>
            <span>{quantity} In Cart</span>
            <button className='increament'onClick={()=>increament(id)}>+</button>
          </div>
          <button className='remove' onClick={()=>removeItems(id)}>Remove from Cart</button>
          </div>}
        </div>
    </div>
  )
}

export default MmoGames