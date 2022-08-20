import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../../Utilities/Firebase.init";
import { useForm } from "react-hook-form";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ProfilePic from "../../../Images/profile_av.svg";
import { toast } from "react-toastify";
import useToken from "../../../Hooks/useToken";

const Signup = () => {
    // show hide password
    const [showPass, setShowPass] = useState(false);

    // react firebase auth hooks
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, , googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, , facebookError] = useSignInWithFacebook(auth);

    // for navigate where the user came from
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // react hook form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // use token custom hook
    const { token } = useToken(user || googleUser || facebookUser);

    const handleCreateAccount = async (data) => {
        const { name, email, password } = data;
        if (data) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name, photoURL: ProfilePic });
            reset();
        }
    };

    // when getting errors
    if (error || googleError || facebookError) {
        toast.error(error.message);
    }

    // when token will generated
    if (token) {
        navigate(from, { replace: true });
        toast.success("Your have logged in your account");
    }

    return (
        <section className="container mx-auto pt-24">
            <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto md:flex items-center justify-center">
                <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 px-6 sm:py-10  py-6">
                    <form onSubmit={handleSubmit(handleCreateAccount)}>
                        <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Create your account</p>
                        <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                            Already a user?{" "}
                            <Link to="/login" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-primary cursor-pointer">
                                Login here
                            </Link>
                        </p>

                        <div className="mt-8">
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                Full Name
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                id="name"
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Type your name "
                            />
                            {errors.name && <span className="text-red-500 text-sm">Your name is required</span>}
                        </div>
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
                        <div className="mt-6 w-full">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input {...register("password", { required: true })} id="myInput" type={showPass ? "text" : "password"} className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div onClick={() => setShowPass(!showPass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <div id="show">{showPass ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</div>
                                </div>
                            </div>
                            {errors.password && <span className="text-red-500 text-sm">Your password is required</span>}
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="text-sm font-semibold text-white transition bg-secondary border rounded hover:bg-secondary/90 py-4 w-full">
                                {loading ? <FontAwesomeIcon spin icon={faSpinner} /> : "Create Account "}
                            </button>
                        </div>
                    </form>

                    <div className="w-full flex items-center justify-between py-8">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
                        <hr className="w-full bg-gray-400" />
                    </div>

                    <button onClick={() => signInWithGoogle()} className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full hover:bg-gray-100">
                        <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                                fill="#34A853"
                            />
                            <path
                                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                                fill="#EB4335"
                            />
                        </svg>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>

                    <button onClick={() => signInWithFacebook()} className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-gray-100">
                        <FontAwesomeIcon className="text-[#4267B2]" icon={faFacebookF} />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Facebook</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Signup;
