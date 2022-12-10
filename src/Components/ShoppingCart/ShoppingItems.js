import React from 'react'
import { Stack , Button } from 'react-bootstrap'
// import games from '../../data/games.json'
import games from '../../data/Games'
import currencyFormat from '../Info/currency'
import {ShoppingUseContext} from '../Contexts/Contexts'
const CartItems = ({ id, quantity })=> {
    const {removeItems} = ShoppingUseContext()
    const items = games.find((item) =>item.id === id);
    if (items == null) return null;
    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
            <img src={items.img} alt={items.alt} width="100px" height="100px"></img>
            <div className='me-auto'>
                <div>
                    {items.name}{" "}
                    {quantity > 1 && <span className='text-muted'>x{quantity}</span>} 
                </div>
                <div>{currencyFormat(items.price)}</div>
                </div>
                <div>
                {currencyFormat(items.price * quantity)} {` `}
                <Button variant='outline-danger' size="sm" onClick={()=>removeItems(items.id)} >&times;</Button>
            </div>
        </Stack>
    )
}

export default CartItems;