import Home from "./Components/Home/Home"
import {  Routes , Route , HashRouter} from 'react-router-dom'
import Games from "./Components/Games/Games"
import Nav from "./Components/NavBar/Nav"
import ContextProvider from "./Components/Contexts/Contexts"
const RouteSwitch = () => {
    return (
        <ContextProvider>
        {/* <BrowserRouter> */}
        <HashRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Games" element={<Games />} />
        </Routes>
        </HashRouter>
        {/* </BrowserRouter> */}
        </ContextProvider>
    )
}
export default RouteSwitch