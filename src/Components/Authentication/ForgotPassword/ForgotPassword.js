import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const [sending, setSending] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleResetPassword = async (data) => {
        setSending(true);
        await sendPasswordResetEmail(auth, data.email)
            .then(() => {
                setSending(false);
                reset();
                toast.success(`your reset usr send to your email: ${data.email}`);
            })
            .catch((error) => {
                setSending(false);
                reset();
                toast.error(error.message.includes("user-not-found") && "User Not Found");
            });
    };

    return (
        <section className="container mx-auto pt-24">
            <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto md:flex items-center justify-center">
                <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 px-6 sm:py-10  py-6">
                    <form onSubmit={handleSubmit(handleResetPassword)}>
                        <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Reset your password</p>
                        <div className="mt-8">
                            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                id="email"
                                type="email"
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="e.g: john@gmail.com "
                            />
                            {errors.email && <span className="text-red-500 text-sm">Your email is required</span>}
                        </div>

                        <div className="mt-8">
                            <button className="text-sm font-semibold text-white transition bg-secondary border rounded hover:bg-secondary/90 py-4 w-full">{sending ? <FontAwesomeIcon spin icon={faSpinner} /> : "Reset Password"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
