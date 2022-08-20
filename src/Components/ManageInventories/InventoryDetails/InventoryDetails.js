import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useInventory from "../../../Hooks/useInventory";
import useUpdates from "../../../Hooks/useUpdates";
import Spinner from "../../Shared/Spinner/Spinner";

const InventoryDetails = () => {
    const { inventoryID } = useParams();
    const { inventory, stock, setStock, loading } = useInventory(inventoryID);
    const { name, price, supplier, description, picture, _id } = inventory;
    const [postLoading, setPostLoading] = useState(false);

    const [handleUpdate] = useUpdates();

    const handleDelivered = () => {
        handleUpdate(_id, stock - 1, setStock, setPostLoading);
    };

    const handleStockUpdate = async (e) => {
        e.preventDefault();
        setPostLoading(true);
        handleUpdate(_id, parseInt(e.target.stock.value), setStock, setPostLoading);
    };

    return (
        <section className={`container mx-auto pt-24 mb-28`}>
            <div className="relative">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <h1 className="text-4xl font-bold text-center my-10">Inventory Product Details</h1>
                        <div className="grid md:grid-cols-2 md:gap-20">
                            <div className="product-details relative">
                                <h2 className="text-3xl font-bold mb-5">{name}</h2>
                                <img className="w-full" src={picture} alt="" />

                                <span
                                    className={`text-gray-800 shadow-lg font-bold absolute top-12 sm:top-8 right-[0] sm:right-[-20px] ${
                                        stock > 10 ? "bg-green-400" : stock <= 10 && stock > 0 ? "bg-yellow-400" : "bg-red-400"
                                    } w-24 h-24 rounded-full flex items-center justify-center`}
                                >
                                    {stock > 10 ? "Available" : stock <= 10 && stock > 0 ? "Low Stock" : "Sold"}
                                </span>
                            </div>
                            <div className="pt-12">
                                <div className="description mb-5">
                                    <h4 className="text-2xl font-semibold mb-2 text-title">Product Description:</h4>
                                    <p className="text-paragraph">{description}</p>
                                </div>
                                <div className="description mb-5">
                                    <h4 className="text-2xl font-semibold mb-5 text-title">
                                        Supplier: <span className="text-paragraph text-lg">{supplier}</span>
                                    </h4>
                                </div>
                                <p className="text-2xl font-semibold mb-5">
                                    Available Stock: <span className="text-paragraph text-lg">{stock} pcs</span>
                                </p>

                                <h4 className="text-2xl font-semibold mb-5">
                                    Product Price: <span className="text-paragraph text-lg">${price}</span>
                                </h4>

                                <button onClick={() => handleDelivered()} className="bg-secondary px-4 py-2 mb-6 text-white">
                                    Delivered
                                </button>

                                <form onSubmit={handleStockUpdate}>
                                    <label htmlFor="stock">
                                        <h4 className="text-2xl font-semibold mb-3">Update Stock:</h4>
                                        <input className="border w-8/12 px-3 py-3" type="number" defaultValue={inventory.stock} name="stock" id="stock" />
                                    </label>{" "}
                                    <div className="flex gap-5">
                                        <button className="text-white bg-secondary px-3 py-2 mt-3" type="submit">
                                            {postLoading ? (
                                                <>
                                                    <FontAwesomeIcon spin icon={faSpinner} /> 'Adding... '
                                                </>
                                            ) : (
                                                "Add Stock"
                                            )}
                                        </button>
                                        <Link to="/manage-inventories" className="text-title font-bold bg-primary px-3 py-2 mt-3" type="submit">
                                            See All Inventories
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default InventoryDetails;
