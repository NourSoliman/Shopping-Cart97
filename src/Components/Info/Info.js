import './info.css'
import currencyFormat from './currency'
import { ShoppingUseContext } from '../Contexts/Contexts'
const Info = ({ id, price, name, img , alt }) => {
    const { gamesQuantity, increament, decreament, removeItems } = ShoppingUseContext()
    const quantity = gamesQuantity(id);
    return (
        <div className='games-container'>
            <div className='images'>
                <img src={img} alt={alt} className="image"></img>
            </div>
            <div className='games-info'>
                <span className='name'>{name}</span>
                <span className='price'>{currencyFormat(price)}</span>
            </div>
            <div className='buttons'>
                {quantity === 0 ? <button className='add' onClick={() => increament(id)}>Add to cart</button> :
                    <div>
                        <div>
                            <button onClick={() => decreament(id)} className="decremeant">- </button>
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








// import wow from '../Images/wow.png'
// import albion from '../Images/albion.png'
// import everwinter from '../Images/everwinter.png'
// import assassin from '../Images/assassin.png'
// import mount from '../Images/Mount.png'
// import diablo from '../Images/diablo.png'
// import valorant from '../Images/valorant.png'
// import csgo from '../Images/csgo.png'
// import apex from '../Images/apex.png'






//old way 
/* <div className='games-container'>
<div className='mmo'>
    <img src={wow} width="150px" height="150px" alt='wow' className='image'></img>
    <h2>World Of War Craft</h2>
    <p>Price: 50$</p>
    <div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='mmo'>
    <img src={albion} alt="albion" width="150px" height="150px" className='image'></img>
    <h2>Albion Online</h2>
    <p>Price: 10$</p>
    <div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='mmo'>
    <img src={everwinter} className="image" alt='everwinter'></img>
    <h2>EverWinter</h2>
    <p>Price: 20$</p>
    <div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='rpg'>
<img src={assassin} alt="assassin" className='image'></img>
<h2>Assassin's creed</h2>
<p>Price: 40$</p>
<div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='rpg'>
<img src={mount} className="image" alt='mount'></img>
<h2>Mount&bladeII</h2>
<p>Price: 30$</p>
<div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='rpg'>
<img src={diablo} className='image' alt='diablo'></img>
<h2>diablo</h2>
<p>Price: 20$</p>
<div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='fps'>
    <img src={valorant} className="image" alt=''></img>
    <h2>Valorant</h2>
    <p>Price: 5$</p>
    <div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='fps'>
    <img src={apex} className="image" alt=''></img>
    <h2>Apex</h2>
    <p>Price: 10$</p>
    <div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
<div className='fps'>
    <img src={csgo} className="image" alt=''></img>
    <h2>CSGO</h2>
    <p>Price: 25$</p>
    <div className='buttons-container'>
    <button>+</button>
    <button>Add To Cart</button>
    <button>-</button>
    </div>
</div>
</div> */
