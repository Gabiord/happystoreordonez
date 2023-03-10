import ItemListContainer from "./ItemListContainer"
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import LandingPage from "./LandingPage"
import TrackingPage from "./TrackingPage";


function Main() {
    return (
        <main>
            <Routes>
                <Route path="/happystoreordonez" element={<LandingPage />} />
                <Route path="/products" element={<ItemListContainer />} />
                <Route path="products/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/tracking/:id" element={<TrackingPage />} />
            </Routes>
        </main>
    )
}

export default Main;