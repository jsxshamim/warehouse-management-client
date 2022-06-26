import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import RecentInventories from "../RecentInventories/RecentInventories";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <main className="relative">
            <Banner />
            <RecentInventories />
            <Features />
            <Pricing />
            <Testimonials />
        </main>
    );
};

export default Home;
