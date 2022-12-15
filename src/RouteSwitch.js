import Home from "./Components/Home/Home"
import {  Routes , Route , HashRouter} from 'react-router-dom'
import Games from "./Components/Games/Games"
import Nav from "./Components/NavBar/Nav"
import ContextProvider from "./Components/Contexts/Contexts"
import Mmorpg from "./Components/mmorpg/Mmorpg"
import RPG from "./Components/RPG/RPG"
import Fps from "./Components/FPS/Fps"
const RouteSwitch = () => {
    return (
        <ContextProvider>
        {/* <BrowserRouter> */}
        <HashRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/Mmorpg" element={<Mmorpg />}/>
            <Route path="/RPG" element={<RPG />} />
            <Route path="/FPS" element={<Fps />} />
        </Routes>
        </HashRouter>
        {/* </BrowserRouter> */}
        </ContextProvider>
    )
}
export default RouteSwitch