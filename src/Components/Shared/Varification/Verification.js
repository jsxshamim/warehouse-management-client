import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";

const Verification = () => {
    const [user] = useAuthState(auth);

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const handleVerify = async () => {
        await sendEmailVerification();
        toast.success("Email send successfully, Please check your email");
    };

    return (
        <div className="text-center pt-36">
            <h1 className="text-4xl font-bold mb-4 text-red-600">⛔ Please Verify your account ⛔</h1>
            <p>
                To continue with easyStock, please verify your email address: <strong>{user.email}</strong>
            </p>
            <p className="text-cyan-500 my-4">Still can't find the email?</p>
            <button onClick={handleVerify} className="text-xl bg-primary mb-3 px-4 py-3 text-white fw-bold">
                Resend Verification Email {sending && <FontAwesomeIcon spin icon={faSpinner} />}
            </button>

            <br />
            <br />
            <br />
            <small>* once verify your email just reload the page to continue</small>
        </div>
    );
};

export default Verification;
