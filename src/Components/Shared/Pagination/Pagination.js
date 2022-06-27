import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Pagination.css";

const Pagination = ({ setInventories, size }) => {
    const [pageNumber, setPageNumber] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const url = `https://easystock-server.herokuapp.com/inventories?page=${page}&size=${size}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setInventories(data);
            });
    }, [page, setInventories, size]);

    useEffect(() => {
        fetch("https://easystock-server.herokuapp.com/numberOfItems")
            .then((res) => res.json())
            .then((data) => {
                const numberOfPage = data.count / size;
                setPageNumber(Math.ceil(numberOfPage));
            });
    }, [size]);

    return (
        <>
            <div class="bg-white flex items-center justify-between">
                <div class="flex-1 flex justify-between sm:hidden">
                    <button disabled={page === 0 ? true : false} onClick={() => setPage(page - 1)} class={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}>
                        {" "}
                        Previous{" "}
                    </button>
                    <button onClick={() => setPage(page + 1)} class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        {" "}
                        Next{" "}
                    </button>
                </div>
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            disabled={page === 0 ? true : false}
                            onClick={() => setPage(page - 1)}
                            class={`disabled:bg-secondary/50  disabled:cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-secondary text-sm font-medium text-white `}
                        >
                            <span class="sr-only">Previous</span>

                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        {[...Array(pageNumber).keys()].map((number) => (
                            <button
                                key={number}
                                onClick={() => setPage(number)}
                                class={`${page === number ? "border-indigo-500 bg-indigo-50 text-indigo-600 z-10" : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"}  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                            >
                                {" "}
                                {number + 1}
                            </button>
                        ))}
                        <button onClick={() => setPage(page + 1)} class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-secondary text-sm font-medium text-white ">
                            <span class="sr-only">Next</span>

                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Pagination;
