import React from "react";
import Logo from "../../../Images/EazyStock_Logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import FooterBG from "../../../Images/footer-bg.png";

const Footer = () => {
    return (
        <footer>
            <div className="relative flex justify-start md:justify-center md:items-end ">
                <img className="absolute object-cover top-10 h-full w-full xl:mt-10 z-0" src={FooterBG} alt="background" />
                <div className="flex pt-36 md:pt-32 lg:pt-40 xl:pt-96   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
                    <div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
                        <div className="flex justify-start items-center space-x-4">
                            <div className="cursor-pointer w-56">
                                <img className="" src={Logo} alt="logo" />
                            </div>
                        </div>
                        <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
                            <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Community</h2>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    About Us
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    Guidelines and how to
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    Quote from the best
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    How to start a blog
                                </Link>
                            </div>
                            <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Getting Started</h2>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    About Us
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    Guidelines and how to
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    Quote from the best
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    How to start a blog
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    Quote from the best
                                </Link>
                                <Link to="/" className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                                    Guidelines and how to
                                </Link>
                            </div>
                            <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Resources</h2>
                                <Link to="/" className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                                    Accessibility
                                </Link>
                                <Link to="/" className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                                    Usability
                                </Link>
                                <Link to="/" className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                                    Marketplace
                                </Link>
                                <Link to="/" className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                                    Design &amp; Dev
                                </Link>
                                <Link to="/" className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                                    Marketplace
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex border-t pt-10 xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
                        <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white">2020 The Good Company. All Rights Reserved</p>
                        <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
                            <Link to="/" className="text-base leading-none text-white hover:text-gray-300">
                                Terms of service
                            </Link>
                            <Link to="/" className="text-base leading-none text-white hover:text-gray-300">
                                Privacy Policy
                            </Link>
                            <Link to="/" className="text-base leading-none text-white hover:text-gray-300">
                                Security
                            </Link>
                            <Link to="/" className="text-base leading-none text-white hover:text-gray-300">
                                Sitemap
                            </Link>
                        </div>
                        <div className="flex  justify-start md:justify-end items-start  w-full md:w-auto md:items-center space-x-6 ">
                            <a href="https://github.com/wpshamim" className="text-white hover:text-gray-200 ">
                                <FontAwesomeIcon className="w-6 h-6" icon={faGithub} />
                            </a>

                            <a href="https://github.com/wpshamim" className="text-white hover:text-gray-200 ">
                                <FontAwesomeIcon className="w-6 h-6" icon={faTwitter} />
                            </a>
                            <a href="https://github.com/wpshamim" className="text-white hover:text-gray-200 ">
                                <FontAwesomeIcon className="w-6 h-6" icon={faFacebook} />
                            </a>
                            <a href="https://github.com/wpshamim" className="text-white hover:text-gray-200 ">
                                <FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
