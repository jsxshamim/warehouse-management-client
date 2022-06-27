import useGetData from "../../../Hooks/useGetData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Inventory from "../Inventory/Inventory";
import { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../../Utilities/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { toast } from "react-toastify";
import Pagination from "../../Shared/Pagination/Pagination";
import "./Inventory.css";

const Inventories = () => {
    const [inventories, setInventories] = useGetData("http://localhost:5000/inventories");
    const [show, setShow] = useState(false);
    const [user] = useAuthState(auth);
    const [size, setSize] = useState(5);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddInventory = async (data) => {
        const newInventory = { ...data, addedDate: new Date() };

        const API = "http://localhost:5000/inventory";
        try {
            await axios.post(API, newInventory);

            reset();
            setShow(false);
            toast.success("Your Item Added Successfully!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleDeleteInventory = async (id) => {
        const confirmed = window.confirm("Are you sure?");

        if (confirmed) {
            const remaining = inventories.filter((inventory) => inventory._id !== id);
            setInventories(remaining);
            const API = `http://localhost:5000/inventory/${id}`;
            axios.delete(API).then((res) => console.log(res.data));
        }
    };

    return (
        <section className="lg:container mx-auto pt-24 px-5">
            <div className="py-20">
                <div className="section-top text-center pb-10">
                    <h1 className="text-4xl font-bold text-title section-title mb-5">Manage All Inventory Items</h1>
                </div>
                <div className=" bg-white shadow rounded">
                    <div className="flex flex-col md:flex-row gap-5 p-4 lg:p-8 justify-between w-full">
                        <div className="flex justify-between md:w-1/2 order-2 md:order-1 ">
                            <div className="flex items-center gap-2">
                                Show
                                <select className="relative inline-flex items-center px-4 py-2 border text-sm font-medium" onChange={(e) => setSize(e.target.value)} name="page" id="page">
                                    <option defaultValue="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                            </div>

                            <Pagination size={size} setInventories={setInventories} />
                        </div>

                        <button onClick={() => setShow(true)} className="order-1 md:order-2 rounded flex gap-3 bg-secondary text-white px-5 py-2 items-center text-md md:w-auto w-48">
                            <FontAwesomeIcon className="text-white" icon={faPlus} /> New Inventory
                        </button>
                    </div>

                    <div className="w-full">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="w-full h-16 border-gray-300  border-b py-8">
                                    <th className="pl-8 text-left text-md text-title">#SKU</th>
                                    <th className="text-left text-md text-title">Inventory Items</th>
                                    <th className="text-left text-md text-title">Description</th>
                                    <th className="text-left text-md text-title">Price</th>
                                    <th className="text-center text-md text-title">Stock</th>
                                    <th className="text-center text-md text-title">Supplier</th>
                                    <th className="text-center text-md text-title">Status</th>
                                    <th className="text-center text-md text-title">Date Added</th>
                                    <th className="text-center text-md text-title">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventories.map((inventory) => (
                                    <Inventory key={inventory._id} handleDeleteInventory={handleDeleteInventory} inventory={inventory} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {show && (
                <div className="fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                    <div className="absolute bg-black/20 opacity-80 inset-0 z-0"></div>
                    <div className="w-full  max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        <div className="mt-2 md:block py-2 px-4">
                            <h2 className="text-2xl font-bold border-b pb-2 mb-5">Add Inventory Item</h2>

                            <form onSubmit={handleSubmit(handleAddInventory)}>
                                <label htmlFor="name">
                                    <h4 className="font-semibold text-paragraph mb-2 text-lg">User Email</h4>
                                    <input defaultValue={user?.email} {...register("email", { required: true })} readOnly className="border w-full px-3 py-2 mb-5 bg-gray-200 focus:outline-none" type="email" name="email" id="email" />
                                </label>

                                <label htmlFor="name">
                                    <h4 className="font-semibold text-paragraph mb-2 text-lg">Product Name</h4>
                                    <input {...register("name", { required: true })} className="border w-full px-3 py-2 mb-5" type="text" name="name" id="name" />
                                    {errors.name && <span>This field is required</span>}
                                </label>

                                <div className="flex justify-between gap-5 text-paragraph mb-5">
                                    <label className="w-full" htmlFor="stock">
                                        <h4 className="font-semibold text-lg mb-2">Stock</h4>
                                        <input {...register("stock", { required: true })} className="border w-full px-3 py-2" type="number" name="stock" id="stock" />
                                        {errors.stock && <span>This field is required</span>}
                                    </label>

                                    <label className="w-full" htmlFor="supplier">
                                        <h4 className="font-semibold text-lg mb-2">Supplier</h4>
                                        <input {...register("supplier", { required: true })} className="border w-full px-3 py-2" type="text" name="supplier" id="supplier" />
                                        {errors.supplier && <span>This field is required</span>}
                                    </label>
                                </div>

                                <div className="flex justify-between gap-5 text-paragraph mb-5">
                                    <label className="w-full" htmlFor="price">
                                        <h4 className="font-semibold text-lg mb-2">Price</h4>
                                        <input {...register("price", { required: true })} className="border w-full px-3 py-2" type="number" name="price" id="price" />
                                        {errors.supplier && <span>This field is required</span>}
                                    </label>

                                    <label className="w-full" htmlFor="picture">
                                        <h4 className="font-semibold text-lg mb-2">Image Url</h4>
                                        <input {...register("picture", { required: true })} className="border w-full px-3 py-2" type="text" name="picture" id="picture" />
                                        {errors.picture && <span>This field is required</span>}
                                    </label>
                                </div>

                                <label className="w-full mb-5" htmlFor="description">
                                    <h4 className="font-semibold text-lg mb-2">Description</h4>
                                    <textarea {...register("description", { required: true })} className="border w-full px-3 py-2" name="description" id="description" cols="30" rows="2"></textarea>
                                    {errors.description && <span>This field is required</span>}
                                </label>

                                <div className="btn-group mt-5 pb-5">
                                    <button onClick={() => setShow(false)} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 mr-5">
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
        </section>
    );
};

export default Inventories;
