import { useEffect, useState } from "react";
import axios from "axios";

const useInventory = (inventoryID) => {
    const [inventory, setInventory] = useState({});
    const [stock, setStock] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getInventory = async () => {
            try {
                const API = `https://easystock-server.herokuapp.com/inventory/${inventoryID}`;
                const { data } = await axios.get(API);
                setInventory(data);
                setStock(data.stock);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        };
        getInventory();
    }, [inventoryID, setLoading]);
    return { inventory, stock, setInventory, setStock, loading };
};

export default useInventory;
