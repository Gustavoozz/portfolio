import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './../App'
import { Home } from '../Pages/Home';
import { Projects } from '../Pages/Projects';
// import About from '../Pages/About';

export const RoutesPage = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
            </Routes>
        </BrowserRouter>
    )
}