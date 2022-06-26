import { useEffect, useState } from "react";
import axios from "axios";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const API = `http://localhost:5000/inventories`;
        const getInventories = async () => {
            try {
                const { data } = await axios.get(API);
                setInventories(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        getInventories();
    }, []);
    return { inventories, setInventories };
};

export default useInventories;
