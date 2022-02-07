import { Routes, Route } from 'react-router-dom';
import Contato from '../Pages/Contato';
import Home from '../Pages/Home';

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    )
}

export default MainRoutes;