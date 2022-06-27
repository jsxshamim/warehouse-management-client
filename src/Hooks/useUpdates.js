import { toast } from "react-toastify";

const useUpdates = () => {
    const handleUpdate = (id, stockDecrement, setStock) => {
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
                toast.success("Your inventory has been updated!");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return [handleUpdate];
};

export default useUpdates;
