import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../../Utilities/Firebase.init";
import Verification from "../../Shared/Varification/Verification";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user && !user?.emailVerified) {
        return <Verification />;
    }

    return children;
};

export default RequireAuth;
