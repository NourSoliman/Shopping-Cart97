import React from 'react'
import { ShoppingUseContext } from '../Contexts/Contexts'
const FPSGames = ({id , name , price , img, alt}) => {
    const {  gamesQuantity, increament, decrement, removeItems } = ShoppingUseContext()
    const quantity = gamesQuantity(id)
    return (
        <div className='games-container'>
            <div className='images'>
                <img src={img} alt={alt} className="image"/>
            </div>
            <div className='games-info'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <div className='buttons'>
            {quantity === 0 ? <button onClick={()=>increament(id)} className="add">Add to Cart</button> :
                <div>
                    <div>
                        <button className='decrement' onClick={()=>decrement(id)}>-</button>
                        <span>{quantity} In Cart</span>
                        <button className='increament'onClick={()=>increament(id)}>+</button>
                    </div>
                    <button className='remove' onClick={()=>removeItems(id)}>Remove</button>
                </div>
                }
                </div>
        </div>
    )
}

export default FPSGames