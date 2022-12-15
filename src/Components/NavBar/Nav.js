import logo1 from '../../../src/logo2.png'
import { FaBars } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {SiGamejolt} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import './Nav.css'
import { ShoppingUseContext } from '../Contexts/Contexts'
import { useState } from 'react'
const Nav = () => {
    const [toggle, setToggle] = useState(true)
    const { openCart, cartQuantity } = ShoppingUseContext()
    const dropMenu = () => {
        setToggle(!toggle)
    }
    return (
        <div className="nav">
            <div className='logo1'>
                <img src={logo1} alt="logo" width="75px" height="75px" className='logo' />
                <NavLink to='/' className='header'><h1 >DragonGames</h1></NavLink>
            </div>
                <div>
                </div>
            <div className="links" >
                <i className='icon' onClick={dropMenu}><FaBars size="30px" /></i>
                {toggle ? <ul >
                    <li className='link' ><AiFillHome size="30px" /><NavLink to='/' className="navlink">Home</NavLink></li>
                    <li className='link' ><SiGamejolt size="30px" /><NavLink to='/Games' className="navlink" >Games</NavLink></li>
                    <li className='link'><button className="navlink" id='cart-id' onClick={openCart} ><BsCart3 size="30px" /><span className='number'>{cartQuantity}</span></button></li>
                    <li className='li-close'><button className='closeButton' onClick={dropMenu}>&times;</button></li>
                </ul> : null}
            </div>
        </div>
    )
}
export default Nav