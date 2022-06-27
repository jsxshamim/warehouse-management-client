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
import Signup from "./Components/Authentication/Signup/Signup";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import ForgotPassword from "./Components/Authentication/ForgotPassword/ForgotPassword";
import OurFeatures from "./Components/OurFeatures/OurFeatures";
import OurTestimonials from "./Components/OurTestimonials/OurTestimonials";
import Blog from "./Components/Blog/Blog";
import MyInventories from "./Components/MyInventories/MyInventories";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/manage-inventories"
                    element={
                        <RequireAuth>
                            <Inventories />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/inventory/:inventoryID"
                    element={
                        <RequireAuth>
                            <InventoryDetails />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/my-inventories"
                    element={
                        <RequireAuth>
                            <MyInventories />
                        </RequireAuth>
                    }
                />

                <Route path="/features" element={<OurFeatures />} />
                <Route path="/testimonials" element={<OurTestimonials />} />
                <Route path="/blog" element={<Blog />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<ForgotPassword />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
            <Footer />
        </>
    );
}

export default App;
