import "./App.css";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Shared/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import Inventories from "./Components/ManageInventories/Inventories/Inventories";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Login from "./Components/Authentication/Login/Login";
import InventoryDetails from "./Components/ManageInventories/InventoryDetails/InventoryDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manage-inventories" element={<Inventories />} />
                <Route path="/login" element={<Login />} />
                <Route path="/inventory/:inventoryID" element={<InventoryDetails />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
