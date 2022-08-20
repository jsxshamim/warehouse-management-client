import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const getData = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post("https://easystock-server.herokuapp.com/login", { email });

                if (data?.token) {
                    localStorage.setItem("access-token", data?.token);
                    setToken(data?.token);
                }
            }
        };
        getData();
    }, [user]);

    return { token, setToken };
};
export default useToken;
