import './Home.css';
import dragons1 from '../../dragons1.png'
function Home() {
  return (
    <div className="home">
      <div className='info'>
        <h1>Welcome to gamers World</h1>
        <p>Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world Welcome to gamers world </p>
      </div>
      <div className='main-picture'>
        <img src={dragons1} alt="dragon" className="dragon"></img>
      </div>
    </div>
  );
}

export default Home;
