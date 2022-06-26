import { useEffect, useState } from "react";
import axios from "axios";

const useInventory = (inventoryID) => {
    const [inventory, setInventory] = useState({});
    const [stock, setStock] = useState(0);

    useEffect(() => {
        const getInventory = async () => {
            try {
                const API = `http://localhost:5000/inventory/${inventoryID}`;
                const { data } = await axios.get(API);
                setInventory(data);
                setStock(data.stock);
            } catch (error) {
                console.error(error.message);
            }
        };
        getInventory();
    }, [inventoryID]);
    return { inventory, stock, setInventory, setStock };
};

export default useInventory;
