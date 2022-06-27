import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (api) => {
    const [inventories, setInventories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getInventories = async () => {
            try {
                const { data } = await axios.get(api);
                setInventories(data);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        };
        getInventories();
    }, [api]);
    return [inventories, setInventories, loading];
};

export default useGetData;
