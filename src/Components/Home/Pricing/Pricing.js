import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pricing = () => {
    return (
        <section className="container mx-auto py-20 shadow-lg">
            <div className="section-top text-center pb-20">
                <h1 className="text-4xl font-bold text-title section-title mb-5">Choose Your Plan</h1>
                <p>Choose one of the plans that suits you. You will get a better service with the upgraded package.</p>
            </div>

            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div className="p-8 bg-white shadow rounded border-0 cursor-pointer">
                        <h4 className="mb-2 text-2xl font-bold font-heading">Beginner</h4> <span className="text-6xl font-bold">Free</span>
                        <p className="mt-3 mb-6 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        <ul className="mb-6 text-gray-500">
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>Life Time Update</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>6 Months Support</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>For Personal Project Only</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span data-config-id="01_benefit4">Skype Support</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>Whatsapp Support</span>{" "}
                            </li>
                        </ul>{" "}
                        <a className="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-secondary hover:bg-secondary/80 text-white font-bold leading-loose transition duration-200" href="/">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div className="p-8 bg-secondary shadow rounded">
                        <h4 className="mb-2 text-2xl font-bold text-white" data-config-id="02_title">
                            Intermediate
                        </h4>{" "}
                        <span className="text-6xl font-bold text-white" data-config-id="02_price">
                            $24
                        </span>{" "}
                        <span className="text-gray-50 text-xs" data-config-id="02_note">
                            /month
                        </span>
                        <p className="mt-3 mb-6 leading-loose text-gray-50" data-config-id="02_desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                        <ul className="mb-6 text-gray-50">
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faCheckCircle} />
                                <span>Life Time Update</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faCheckCircle} />
                                <span>6 Months Support</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faCheckCircle} />
                                <span>For Personal Project Only</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faCheckCircle} />
                                <span data-config-id="01_benefit4">Skype Support</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faCheckCircle} />
                                <span>Whatsapp Support</span>{" "}
                            </li>
                        </ul>{" "}
                        <a className="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-white hover:bg-gray-50 font-bold leading-loose transition duration-200" href="/" data-config-id="02_primary-action">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                    <div className="p-8 bg-white shadow rounded">
                        <h4 className="mb-2 text-2xl font-bold font-heading" data-config-id="03_title">
                            Professional
                        </h4>{" "}
                        <span className="text-6xl font-bold" data-config-id="03_price">
                            $58
                        </span>{" "}
                        <span className="text-gray-400 text-xs" data-config-id="03_note">
                            /month
                        </span>
                        <p className="mt-3 mb-6 text-gray-500 leading-loose" data-config-id="03_desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                        <ul className="mb-6 text-gray-500">
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>Life Time Update</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>6 Months Support</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>For Personal Project Only</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span data-config-id="01_benefit4">Skype Support</span>{" "}
                            </li>
                            <li className="mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-2 w-4 h-4 text-primary" icon={faCheckCircle} />
                                <span>Whatsapp Support</span>{" "}
                            </li>
                        </ul>{" "}
                        <a className="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-secondary hover:bg-secondary/80 text-white font-bold leading-loose transition duration-200" href="/" data-config-id="03_primary-action">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
