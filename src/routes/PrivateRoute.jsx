import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/Loader";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
