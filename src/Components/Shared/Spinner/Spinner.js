import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="flex items-center justify-center absolute spinner">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
