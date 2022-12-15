import React from 'react'
import { ShoppingUseContext } from '../Contexts/Contexts'
const RPGames = ({id , name , price , alt , img}) => {
    const {  gamesQuantity, increament, decrement, removeItems  } = ShoppingUseContext()
    const quanity = gamesQuantity(id)
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
            {quanity === 0 ? <button onClick={()=>increament(id)} className="add">Add to Cart</button> :<div>
                <div>
                    <button onClick={()=>decrement(id)} className="decrement">-</button>
                    <span>{quanity} In Cart</span>
                    <button onClick={()=>increament(id)} className = "increament">+</button>
                </div>
                <button onClick={()=>removeItems(id)} className="remove">Remove</button>
            </div> }
        </div>
        </div>

    )
}

export default RPGames