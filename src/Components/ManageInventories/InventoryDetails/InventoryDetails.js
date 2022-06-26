import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import useInventory from "../../../Hooks/useInventory";

const InventoryDetails = () => {
    const { inventoryID } = useParams();
    const { inventory, stock, setStock } = useInventory(inventoryID);
    const { name, price, supplier, description, picture, _id } = inventory;
    const [success, setSuccess] = useState(false);

    const handleUpdateStock = (id, newStock) => {
        const API = `http://localhost:5000/update-stock/${id}`;

        fetch(API, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                stock: newStock,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setSuccess(true);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleDelivered = () => {
        const newStock = stock - 1;
        if (newStock >= 0) {
            setStock(newStock);
        } else {
            toast.warning("out of stock, please update your stock");
            return;
        }
        handleUpdateStock(_id, newStock);
        if (success) {
            toast.success("Your inventory has been delivered!");
        }
    };

    const handleStockUpdate = (e) => {
        e.preventDefault();
        const newStock = parseInt(e.target.stock.value);
        console.log(newStock);
        if (newStock >= 0) {
            setStock(newStock);
        } else {
            toast.warning("out of stock, please update your stock");
            return;
        }
        handleUpdateStock(_id, newStock);
        if (success) {
            toast.success("Your stock has been updated!");
        }
    };

    return (
        <section className="container mx-auto pt-24">
            <h1>details</h1>
            <div className="grid grid-cols-2 gap-10">
                <div className="product-details relative">
                    <h2>{name}</h2>
                    <img src={picture} alt="" />
                    <p>{description}</p>
                    <div className="flex justify-between items-center">
                        <p>Supplier: {supplier}</p>
                        <p>Quantity: {stock}</p>
                    </div>
                    <h4>${price}</h4>
                    <button onClick={() => handleDelivered()} className="bg-secondary px-4 py-2 text-white">
                        Delivered
                    </button>
                    <span className={`text-gray-800 shadow-lg font-bold absolute top-0 right-[-20px] ${stock > 10 ? "bg-green-400" : stock <= 10 && stock > 0 ? "bg-yellow-400" : "bg-red-400"} w-24 h-24 rounded-full flex items-center justify-center`}>
                        {stock > 10 ? "Available" : stock <= 10 && stock > 0 ? "Low Stock" : "Sold"}
                    </span>
                </div>
                <form onSubmit={handleStockUpdate}>
                    <label htmlFor="stock">
                        <h4 className="text-xl font-semibold mb-3">Update Stock:</h4>
                        <input className="border w-8/12 px-3 py-3" type="number" defaultValue={inventory.stock} name="stock" id="stock" />
                    </label>{" "}
                    <div className="flex gap-5">
                        <button className="text-white bg-secondary px-3 py-2 mt-3" type="submit">
                            Add Stock
                        </button>
                        <Link to="/manage-inventories" className="text-title font-bold bg-primary px-3 py-2 mt-3" type="submit">
                            See All Inventories
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default InventoryDetails;
