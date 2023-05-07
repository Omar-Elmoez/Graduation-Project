import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductsPage from "./pages/AllProducts";
import ProductInfo from './pages/ProductInfo/ProductInfo';
import SignIn from './pages/SingIn/SignIn';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ProductsPage' element={<ProductsPage />} />
                <Route path='/ProductInfo/:id' element={<ProductInfo />} />
                <Route path='/SignIn' element={<SignIn />} />
            </Routes>
        </>
    );
}

