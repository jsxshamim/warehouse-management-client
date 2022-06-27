import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div class="flex items-center justify-center absolute spinner">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
