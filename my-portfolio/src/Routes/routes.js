import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './../App'
import { Home } from '../Pages/Home';

export const RoutesPage = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}