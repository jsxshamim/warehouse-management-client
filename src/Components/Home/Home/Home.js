import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import RecentInventories from "../RecentInventories/RecentInventories";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <main>
            <Banner />
            <RecentInventories />
            <Pricing />
            <Testimonials />
            <Footer />
        </main>
    );
};

export default Home;
