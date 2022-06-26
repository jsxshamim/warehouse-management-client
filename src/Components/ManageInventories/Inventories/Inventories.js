import useInventories from "../../../Hooks/useInventories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Inventory from "../Inventory/Inventory";
import { useState } from "react";

const Inventories = () => {
    const { inventories, setInventories } = useInventories();
    const [show, setShow] = useState(false);

    const handleAddInventory = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name);
    };

    return (
        <div className="container mx-auto pt-24">
            <div className="py-20">
                <div className=" bg-white shadow rounded">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                            <p className="text-base text-gray-600" id="page-view">
                                Viewing 1 - 20 of 60
                            </p>
                        </div>
                        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                            <div className="lg:ml-6 flex items-center">
                                <button onClick={() => setShow(true)} className="rounded flex gap-3 bg-secondary text-white px-5 py-2 items-center text-md">
                                    {" "}
                                    <FontAwesomeIcon className="text-white" icon={faPlus} /> New Inventory
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr className="w-full h-16 border-gray-300  border-b py-8">
                                    <th className="pl-8 text-left text-md text-title">#SKU</th>
                                    <th className="text-left text-md text-title">Product</th>
                                    <th className="text-left text-md text-title">Description</th>
                                    <th className="text-left text-md text-title">Price</th>
                                    <th className="text-center text-md text-title">Stock</th>
                                    <th className="text-center text-md text-title">Supplier</th>
                                    <th className="text-center text-md text-title">Status</th>
                                    <th className="text-center text-md text-title">Date Added</th>
                                    <th className="text-left text-md text-title">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventories.map((inventory) => (
                                    <Inventory inventory={inventory} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {show && (
                <div class="fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                    <div class="absolute bg-black/20 opacity-80 inset-0 z-0"></div>
                    <div class="w-full  max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        <div class="mt-2 md:block py-2 px-4">
                            <h2 className="text-2xl font-bold border-b pb-2 mb-5">Add Inventory Item</h2>

                            <form onSubmit={handleAddInventory} method="post">
                                <label htmlFor="name">
                                    <h4 className="font-semibold text-paragraph mb-2 text-lg">Product Name</h4>
                                    <input className="border w-full px-3 py-2 mb-5" type="text" name="name" id="name" />
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
                                    <button onClick={() => setShow(false)} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 mr-5">
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
        </div>
    );
};

export default Inventories;
