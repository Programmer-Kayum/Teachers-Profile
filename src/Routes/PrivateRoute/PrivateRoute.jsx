import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show a loading spinner while authentication is being checked
  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  // If user is authenticated, allow access
  if (user) {
    return children;
  }

  // Redirect to Sign In page with the current location saved for redirect after login
  return <Navigate state={location.pathname} to={"/signIn"}></Navigate>;
};

// PropTypes validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
