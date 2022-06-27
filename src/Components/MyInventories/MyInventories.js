import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { toast } from "react-toastify";
import auth from "../../Utilities/Firebase.init";
import Inventory from "../ManageInventories/Inventory/Inventory";
import Spinner from "../Shared/Spinner/Spinner";

const MyInventories = () => {
    const [show, setShow] = useState(false);
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        setLoading(true);
        const API = `https://easystock-server.herokuapp.com/myInventories?email=${user?.email}`;
        const getInventories = async () => {
            try {
                const { data } = await axios.get(API, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    },
                });

                setInventories(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error.message);
            }
        };
        getInventories();
    }, [user]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddInventory = async (data) => {
        const newInventory = { ...data, addedDate: new Date() };

        const API = "https://easystock-server.herokuapp.com/inventory";
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
            const API = `https://easystock-server.herokuapp.com/inventory/${id}`;
            axios.delete(API).then((res) => console.log(res.data));
        }
    };

    return (
        <section className="container mx-auto pt-24">
            <div className="py-20">
                <div className="section-top text-center pb-10">
                    <h1 className="text-4xl font-bold text-title section-title mb-5">Manage My Inventories</h1>
                </div>
                <div className=" bg-white shadow rounded">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
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
                                <tr className="w-full h-16 border-gray-300  border-b py-8 px-8">
                                    <th className="pl-8 text-left text-md text-title">#SKU</th>
                                    <th className="text-left text-md text-title">Inventory Items</th>
                                    <th className="text-left text-md text-title">Description</th>
                                    <th className="text-left text-md text-title">Price</th>
                                    <th className="text-center text-md text-title">Stock</th>
                                    <th className="text-center text-md text-title">Supplier</th>
                                    <th className="text-left text-md text-title">Status</th>
                                    <th className="text-center text-md text-title">Date Added</th>
                                    <th className="text-center text-md text-title pr-8">Action</th>
                                </tr>
                            </thead>
                            <tbody className="relative">{loading ? <Spinner /> : inventories.map((inventory) => <Inventory key={inventory._id} loading={loading} handleDeleteInventory={handleDeleteInventory} inventory={inventory} />)}</tbody>
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
                                        <input {...register("price", { required: true })} className="border w-full px-3 py-2" type="text" name="price" id="price" />
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

export default MyInventories;
