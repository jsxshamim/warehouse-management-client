import React from "react";
import useGetData from "../../../Hooks/useGetData";
import Feature from "./Feature";
import "./Features.css";

const Features = () => {
    const [features] = useGetData("https://easystock-server.herokuapp.com/features");

    return (
        <section id="features" className="container mx-auto py-20 bg-gray-50">
            <div className="section-top text-center pb-20">
                <h1 className="text-4xl font-bold text-title section-title mb-5">Our Features</h1>
                <p>Give us a try. There's nothing to install. No training manuals needed. No commitments.</p>
            </div>

            <div className="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feature) => (
                    <Feature key={feature._id} feature={feature} />
                ))}
            </div>
        </section>
    );
};

export default Features;
