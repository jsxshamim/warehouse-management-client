import React from "react";

const Feature = ({ feature }) => {
    return (
        <div>
            <div className="feature p-6 rounded-lg shadow-lg transition">
                <div className="flex items-center gap-3 mb-2">
                    <img className="w-12" src={feature.picture} alt="" />
                    <h3 className="text-xl font-bold">{feature.name}</h3>
                </div>
                <p className="text-lg">{feature.description}</p>
            </div>
        </div>
    );
};

export default Feature;
