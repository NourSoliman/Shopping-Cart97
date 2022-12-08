import React from 'react'
import { ShoppingUseContext } from '../Contexts/Contexts'
import ShoppingItems from './ShoppingItems'
import { Offcanvas } from 'react-bootstrap'

const ShoppingCart = ({ show }) => {
    const { cartItems, closeCart } = ShoppingUseContext()
    return (
        <Offcanvas show={show} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.map((item) => (
                    <ShoppingItems key={item.id} {...item} />
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default ShoppingCart
