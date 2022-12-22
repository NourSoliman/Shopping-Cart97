import logo1 from '../../../src/logo2.png'
import { FaBars } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import { ShoppingUseContext } from '../Contexts/Contexts'
import { useState } from 'react'
const Nav = () => {
    const [toggle, setToggle] = useState(false)
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
            <div className={toggle?"links toggle" : "links"} >
                <i className='icon' onClick={dropMenu}><FaBars size="30px" /></i>
                    <ul >
                    <li className='link' >
                        <NavLink to='/' className="navlink" onClick={dropMenu}>Home</NavLink>
                    </li>
                    <li className='link' >
                        <NavLink to='/Games' className="navlink" onClick={dropMenu}>Games</NavLink>
                    </li>
                    <li className="link">
                        <NavLink to="/Cart" className="cart-link" onClick={dropMenu}>
                            <BsCart3 size="30px" />
                            <span className='number'>{cartQuantity}</span>
                        </NavLink>
                        {/* </button>
                        <button className="navlink" id='cart-id'  ></button> */}
                    </li>
                    <li className='li-close'>
                        <button className='closeButton' onClick={dropMenu}>&times;</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Nav
/* <AiFillHome size="30px" className='close-icons'/>
<SiGamejolt size="30px" className='close-icons'/> */
// import {SiGamejolt} from 'react-icons/si'
// import {AiFillHome} from 'react-icons/ai'