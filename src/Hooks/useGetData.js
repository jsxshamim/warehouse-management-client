import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (api) => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const getInventories = async () => {
            try {
                const { data } = await axios.get(api);
                setInventories(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        getInventories();
    }, [api]);
    return [inventories, setInventories];
};

export default useGetData;
