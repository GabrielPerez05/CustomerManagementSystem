import { Navigate } from "react-router-dom";

// Temporary: Set to true so you can see your pages.
// M4 (Auth Lead) will fix this logic later.
const isAuthenticated = true;

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
