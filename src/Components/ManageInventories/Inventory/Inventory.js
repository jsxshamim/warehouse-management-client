import { faEdit, faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";
import getDate from "../../../Utilities/getDate";
import { Link } from "react-router-dom";

const Inventory = ({ inventory, handleDeleteInventory }) => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [user] = useAuthState(auth);

    const handleUpdateInventory = async (e) => {
        e.preventDefault();

        const newInventory = {
            name: e.target.name.value,
            email: user?.email,
            price: e.target.price.value,
            stock: e.target.stock.value,
            supplier: e.target.supplier.value,
            description: e.target.description.value,
            picture: e.target.picture.value,
            addedDate: new Date(),
        };

        const API = `https://easystock-server.herokuapp.com/inventory/${inventory._id}`;

        fetch(API, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newInventory),
        })
            .then((res) => res.json())
            .then((data) => {
                setShowEdit(false);
                toast.success("Item Updated Successfully!");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <>
            <tr className="h-20 border-gray-300 border-b">
                <td className="lg:px-8 px-3 text-left text-paragraph w-24">#{inventory?._id.replace(/[^0-9]/g, "").slice(-4)}</td>
                <td className="pr-6 lg:w-72">
                    <div className="flex items-center">
                        <div className="h-16 w-16 border p-1">
                            <img src={inventory?.picture} alt="" className="h-full w-full overflow-hidden shadow" />
                        </div>
                        <Link to={`/inventory/${inventory?._id}`} className="ml-2 text-paragraph underline">
                            {inventory?.name}
                        </Link>
                    </div>
                </td>
                <td className="text-left text-paragraph">{inventory?.description.slice(0, 20)}...</td>

                <td className="text-left text-paragraph">${inventory?.price}</td>
                <td className="text-center text-paragraph">{inventory?.stock}</td>
                <td className="text-center text-paragraph">{inventory?.supplier}</td>
                <td className={`${inventory?.stock > 10 ? "bg-green-400 text-paragraph" : inventory?.stock <= 10 && inventory?.stock > 0 ? "bg-yellow-400 text-gray-900" : "bg-red-400 text-white"} mx-2 rounded-full block mt-7 text-center`}>
                    {inventory?.stock > 10 ? "Available" : inventory?.stock <= 10 && inventory?.stock > 0 ? "Low Stock" : "Sold"}
                </td>
                <td className="text-center text-paragraph w-32">{getDate(inventory?.addedDate)}</td>

                <td className="relative text-center w-20">
                    <div className={`dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 ${!show ? "hidden" : ""} w-32`}>
                        <ul className="bg-white shadow rounded py-1 text-left">
                            <li
                                onClick={() => {
                                    setShowEdit(true);
                                    setShow(false);
                                }}
                                className="cursor-pointer text-gray-600 py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                            >
                                <button>
                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                            </li>
                            <li onClick={() => handleDeleteInventory(inventory._id)} className="cursor-pointer text-gray-600 py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                <button>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                    <button onClick={() => setShow(!show)} className="text-gray-500 rounded cursor-pointer border border-transparent">
                        <FontAwesomeIcon className="text-2xl" icon={faEllipsisV} />
                    </button>
                </td>
            </tr>

            {showEdit && (
                <div className="fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                    <div className="absolute bg-black/20 opacity-80 inset-0 z-0"></div>
                    <div className="w-full  max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        <div className="mt-2 md:block py-2 px-4">
                            <h2 className="text-2xl font-bold border-b pb-2 mb-5">Add Inventory Item</h2>

                            <form onSubmit={handleUpdateInventory}>
                                <label htmlFor="name">
                                    <h4 className="font-semibold text-paragraph mb-2 text-lg">Product Name</h4>
                                    <input defaultValue={inventory?.name} className="border w-full px-3 py-2 mb-5" type="text" name="name" id="name" />
                                </label>

                                <div className="flex justify-between gap-5 text-paragraph mb-5">
                                    <label className="w-full" htmlFor="stock">
                                        <h4 className="font-semibold text-lg mb-2">Stock</h4>
                                        <input defaultValue={inventory?.stock} className="border w-full px-3 py-2" type="number" name="stock" id="stock" />
                                    </label>

                                    <label className="w-full" htmlFor="supplier">
                                        <h4 className="font-semibold text-lg mb-2">Supplier</h4>
                                        <input defaultValue={inventory?.supplier} className="border w-full px-3 py-2" type="text" name="supplier" id="supplier" />
                                    </label>
                                </div>

                                <div className="flex justify-between gap-5 text-paragraph mb-5">
                                    <label className="w-full" htmlFor="price">
                                        <h4 className="font-semibold text-lg mb-2">Price</h4>
                                        <input defaultValue={inventory?.price} className="border w-full px-3 py-2" type="number" name="price" id="price" />
                                    </label>

                                    <label className="w-full" htmlFor="picture">
                                        <h4 className="font-semibold text-lg mb-2">Image Url</h4>
                                        <input defaultValue={inventory?.picture} className="border w-full px-3 py-2" type="text" name="picture" id="picture" />
                                    </label>
                                </div>

                                <label className="w-full mb-5" htmlFor="description">
                                    <h4 className="font-semibold text-lg mb-2">Description</h4>
                                    <textarea defaultValue={inventory?.description} className="border w-full px-3 py-2" name="description" id="description" cols="30" rows="2"></textarea>
                                </label>

                                <div className="btn-group mt-5 pb-5">
                                    <button onClick={() => setShowEdit(false)} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 mr-5">
                                        Cancel
                                    </button>
                                    <button type="submit" className="mb-2 md:mb-0  tracking-wider border bg-secondary px-5 py-2 text-sm shadow-sm font-medium  text-white rounded-full hover:shadow-lg">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Inventory;
