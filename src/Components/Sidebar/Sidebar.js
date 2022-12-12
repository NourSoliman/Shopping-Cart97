import '../Sidebar/Sidebar.css'
import React from 'react'
const Sidebar = () => {
    // const {searching} = ShoppingUseContext();
    return (
        <div className='games'>
        {/* <input type="text" placeholder='Search...' className="search" onChange={(e)=>searching(e)} ></input> */}
            <div className='side-bar'>
            <ul className='games-type'>
                <li>All Games</li>
                <li>MMORPG Games</li>
                <li>RPG Games</li>
                <li>FPS Games</li>
            </ul>
            </div>
        </div>
    )
}
export default Sidebar