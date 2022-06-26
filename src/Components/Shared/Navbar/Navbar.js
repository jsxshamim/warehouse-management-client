import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../Images/EazyStock_Logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileInvoice, faSignOut, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const [user, loading] = useAuthState(auth);

    return (
        <section>
            <nav className={`relative flex md:fixed md:w-full flex-wrap items-center justify-between z-40 py-3 bg-white shadow-lg`}>
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800" href="#pablo">
                            <img width={180} src={Logo} alt="" />
                        </a>
                        <button
                            className="text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                        <ul className="flex flex-col gap-5 items-center lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <NavLink className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75" to="/features">
                                    Features
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75" to="/testimonials">
                                    Testimonials
                                </NavLink>
                            </li>
                            {user && (
                                <li className="nav-item">
                                    <NavLink className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75" to="/manage-inventories">
                                        Manage Inventory
                                    </NavLink>
                                </li>
                            )}
                            <li className="nav-item">
                                <NavLink className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-title hover:opacity-75" to="/blog">
                                    Blog
                                </NavLink>
                            </li>
                            {user ? (
                                <li onClick={() => setShow(!show)} className="nav-item cursor-pointer relative">
                                    <div className="flex items-center gap-3">
                                        <img className="w-14 h-14 rounded-full border p-1" src={user?.photoURL} alt="" />
                                    </div>
                                    {show && (
                                        <ul className="absolute top-[70px] right-0">
                                            <div className="rounded shadow bg-white " data-bs-popper="none">
                                                <div className="w-[240px] p-5">
                                                    <div className="pb-0">
                                                        <div className="flex py-1 items-center gap-2">
                                                            <img className="rounded-full w-10 h-10" src={loading ? "Loading" : user?.photoURL} alt="profile" />
                                                            <div className="flex-fill ms-3 ">
                                                                <h4 className="font-bold">{loading ? "Loading" : user?.displayName}</h4>
                                                                <small className="">{user?.email}</small>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="border-b-2 my-3" />
                                                        </div>
                                                    </div>
                                                    <div className="list-group m-2 flex flex-col gap-3">
                                                        <Link to="/my-profile" className="text-lg">
                                                            <FontAwesomeIcon className="mr-3" icon={faUser} /> Profile Page
                                                        </Link>
                                                        <Link to="/my-inventories" className="text-lg">
                                                            <FontAwesomeIcon className="mr-3" icon={faFileInvoice} /> My Inventories
                                                        </Link>
                                                        <Link onClick={() => signOut(auth)} to="/login" className="text-lg">
                                                            <FontAwesomeIcon className="mr-3" icon={faSignOut} /> Sign Out
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <NavLink className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-title hover:opacity-75" to="/login">
                                        <FontAwesomeIcon className="mr-3" icon={faSignIn} /> Login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
