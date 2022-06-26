import { faEdit, faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Inventory = ({ inventory }) => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleUpdateInventory = (data) => {
        console.log(data);
    };

    return (
        <>
            <tr className="h-20 border-gray-300 border-b">
                <td className="pl-8 pr-6 text-left text-paragraph">#{inventory?._id.replace(/[^0-9]/g, "").slice(-4)}</td>
                <td className="pr-6">
                    <div className="flex items-center">
                        <div className="h-8 w-8">
                            <img src={inventory?.picture} alt="" className="h-full w-full rounded-full overflow-hidden shadow" />
                        </div>
                        <p className="ml-2 text-paragraph">{inventory?.name}</p>
                    </div>
                </td>
                <td className="text-left text-paragraph">{inventory?.description.slice(0, 20)}...</td>

                <td className="text-left text-paragraph">${inventory?.price}</td>
                <td className="text-center text-paragraph">{inventory?.stock}</td>
                <td className="text-center text-paragraph">{inventory?.supplier}</td>
                <td className="text-center text-paragraph">Available</td>
                <td className="text-center text-paragraph">25/00/2022</td>

                <td className="pr-8 relative text-center">
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
                            <li className="cursor-pointer text-gray-600 py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
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
                <div class="fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                    <div class="absolute bg-black/20 opacity-80 inset-0 z-0"></div>
                    <div class="w-full  max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        <div class="mt-2 md:block py-2 px-4">
                            <h2 className="text-2xl font-bold border-b pb-2 mb-5">Add Inventory Item</h2>

                            <form onSubmit={() => handleSubmit(handleUpdateInventory)} method="post">
                                <label htmlFor="name">
                                    <h4 className="font-semibold text-paragraph mb-2 text-lg">Product Name</h4>
                                    <input defaultValue={inventory?._id} {...register("example")} className="border w-full px-3 py-2 mb-5" type="text" name="name" id="name" />
                                </label>

                                <div className="flex justify-between stock gap-5 text-paragraph mb-5">
                                    <label className="w-full" htmlFor="stock">
                                        <h4 className="font-semibold text-lg mb-2">Stock</h4>
                                        <input className="border w-full px-3 py-2" type="number" name="stock" id="stock" />
                                    </label>

                                    <label className="w-full" htmlFor="supplier">
                                        <h4 className="font-semibold text-lg mb-2">Supplier</h4>
                                        <input className="border w-full px-3 py-2" type="text" name="supplier" id="supplier" />
                                    </label>
                                </div>

                                <div className="flex justify-between stock gap-5 text-paragraph mb-5">
                                    <label className="w-full" htmlFor="stock">
                                        <h4 className="font-semibold text-lg mb-2">Price</h4>
                                        <input className="border w-full px-3 py-2" type="number" name="stock" id="stock" />
                                    </label>

                                    <label className="w-full" htmlFor="supplier">
                                        <h4 className="font-semibold text-lg mb-2">Image Url</h4>
                                        <input className="border w-full px-3 py-2" type="text" name="supplier" id="supplier" />
                                    </label>
                                </div>

                                <label className="w-full mb-5" htmlFor="supplier">
                                    <h4 className="font-semibold text-lg mb-2">Description</h4>
                                    <textarea className="border w-full px-3 py-2" name="description" id="description" cols="30" rows="2"></textarea>
                                </label>

                                <div className="btn-group mt-5 pb-5">
                                    <button onClick={() => setShowEdit(false)} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 mr-5">
                                        Cancel
                                    </button>
                                    <button type="submit" class="mb-2 md:mb-0  tracking-wider border bg-secondary px-5 py-2 text-sm shadow-sm font-medium  text-white rounded-full hover:shadow-lg">
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
