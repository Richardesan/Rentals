import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ requiredRole }) => {
  const { user, loading, userType } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-screen bg-background pt-20 flex flex-col gap-4 items-center">
        <p className="text-lg text-black opacity-80">Loading...</p>
      </div>
    );
  }

  if (!user || userType !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
