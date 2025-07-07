import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner text-neutral flex justify-center"></span>;
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace />
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;