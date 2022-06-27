import React from "react";
import { useNavigate } from "react-router-dom";

const RecentInventory = ({ inventory }) => {
    const navigate = useNavigate();

    const { name, price, stock, supplier, description, picture, _id } = inventory;
    return (
        <div className="box-wrapper rounded-lg shadow-2xl relative">
            <img className="w-full h-[310px] object-cover" src={picture} alt={name} />
            <div className="box-content ">
                <h2 className="text-title font-bold text-3xl mb-5 pl-10">{name}</h2>
                <div className="border-b mb-2 pb-2">
                    <div className="pl-10 flex flex-wrap items-center justify-between  pr-5 ">
                        <p className="text-lg">
                            Stocks: <span className="text-primary font-bold">{stock}</span>
                        </p>
                        <p className="supplier text-lg ">
                            Supplier: <span className="text-primary font-bold">{supplier}</span>
                        </p>
                    </div>
                </div>
                <div className="pl-10 pb-10">
                    <p className="text-paragraph pb-2 pr-5">{description.slice(0, 80)}...</p>
                    <h4 className="text-title text-3xl font-bold pt-4 pb-8">${price}</h4>
                </div>
            </div>
            <button onClick={() => navigate(`/inventory/${_id}`)} className="z-30 bottom-0 absolute w-full bg-secondary text-white text-lg px-5 py-3 shadow">
                Stock Update
            </button>
            <div className="ribbon ribbon-top-right">
                <span className={`text-gray-700 ${stock > 10 ? "bg-green-400" : stock <= 10 && stock > 0 ? "bg-yellow-400" : "bg-red-400"}`}>{stock > 10 ? "Available" : stock <= 10 && stock > 0 ? "Low Stock" : "Sold"}</span>
            </div>
        </div>
    );
};

export default RecentInventory;
