import { useNavigate } from "react-router-dom";
import useGetData from "../../../Hooks/useGetData";
import "./RecentInventories.css";
import RecentInventory from "./RecentInventory";

const RecentInventories = () => {
    const navigate = useNavigate();

    const [inventories] = useGetData("https://easystock-server.herokuapp.com/inventories");

    return (
        <section className="container mx-auto py-20 shadow-lg">
            <div className="section-top text-center pb-20">
                <h1 className="text-4xl font-bold text-title section-title">Recent Inventories</h1>
            </div>

            <div className="inventories grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-14 px-5">
                {inventories.slice(0, 6).map((inventory) => (
                    <RecentInventory key={inventory._id} inventory={inventory} />
                ))}
            </div>

            <button onClick={() => navigate("/manage-inventories")} className="bg-primary text-2xl px-8 py-2 font-bold text-white rounded mx-auto block">
                See All Inventories
            </button>
        </section>
    );
};

export default RecentInventories;
