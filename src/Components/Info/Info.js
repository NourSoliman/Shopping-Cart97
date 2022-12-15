import './info.css'
import currencyFormat from './currency'
import { ShoppingUseContext } from '../Contexts/Contexts'
const Info = ({ id, price, name, img , alt }) => {
    const { gamesQuantity, increament, decrement, removeItems } = ShoppingUseContext()
    const quantity = gamesQuantity(id);
    console.log(img);
    return (
        <div className='games-container'>
            <div className='images'>
                <img src={img} alt={alt} className="image" />
            </div>
            <div className='games-info'>
                <span className='name'>{name}</span>
                <span className='price'>{currencyFormat(price)}</span>
            </div>
            <div className='buttons'>
                {quantity === 0 ? <button className='add' onClick={() => increament(id)}>Add to cart</button> :
                    <div>
                        <div>
                            <button onClick={() => decrement(id)} className="decrement">- </button>
                            <span className='quantity'> {quantity} In Cart </span>
                            <button onClick={() => increament(id)} className="increament">+ </button>
                        </div>
                        <button onClick={() => removeItems(id)} className="remove">Remove</button>
                    </div>
                }
            </div>
        </div>
    )
}
export default Info

