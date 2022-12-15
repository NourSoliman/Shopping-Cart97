import React from 'react'
import { ShoppingUseContext } from '../Contexts/Contexts'
import ShoppingItems from './ShoppingItems'
import { Offcanvas , Stack   } from 'react-bootstrap'
import currencyFormat from '../Info/currency'
import games from '../../data/Games.js'
const ShoppingCart = ({ show }) => {
    const { cartItems, closeCart } = ShoppingUseContext()
    return (
        <Offcanvas show={show} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={2}>
                {cartItems.map((item) => (
                    <ShoppingItems key={item.id} {...item} />
                ))}
                {currencyFormat(
                    cartItems.reduce((total , cart) => {
                    const items = games.find((i) => i.id === cart.id);
                    return total + (items?.price || 0) * cart.quantity
                    } , 0)
                )}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default ShoppingCart
