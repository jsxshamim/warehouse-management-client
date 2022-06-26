import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../../Utilities/Firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user?.emailVerified) {
        return <div className="py-24"> Please Verify your email</div>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return children;
};

export default RequireAuth;
