import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="banner pt-20 flex items-center">
            <div className="banner-content py-32 container mx-auto">
                <div className="w-6/12 lg:w-[650px]">
                    <h1 className="text-5xl font-bold text-title mb-5 leading-snug">Inventory Management Software in the Cloud</h1>
                    <p className="text-xl text-paragraph">Simple to use, beautifully designed, customizable inventory software system for any business buying and selling goods.</p>
                </div>
                <div className="btn pt-5">
                    <button className="bg-secondary text-white text-xl font-semibold px-10 py-4 rounded mr-5">Try easyStock For Free</button>
                    <button className="bg-gray-100 text-paragraph text-xl font-semibold px-10 py-4 rounded">Take a Tour</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
