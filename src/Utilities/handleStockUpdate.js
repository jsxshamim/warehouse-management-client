import { useState } from "react";
import { toast } from "react-toastify";

const useUpdateStock = () => {
    const [success, setSuccess] = useState(false);

    const handleUpdateStock = (id, stockDecrement, setStock) => {
        const newStock = stockDecrement;

        if (newStock >= 0) {
            setStock(newStock);
        } else {
            toast.warning("out of stock, please update your stock");
            return;
        }

        const API = `https://easystock-server.herokuapp.com/update-stock/${id}`;

        fetch(API, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                stock: newStock,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setSuccess(true);
            })
            .catch((error) => {
                toast.error(error.message);
            });

        if (success) {
            toast.success("Your inventory has been delivered!");
        }
    };

    return [handleUpdateStock, success, setSuccess];
};

export default useUpdateStock;
