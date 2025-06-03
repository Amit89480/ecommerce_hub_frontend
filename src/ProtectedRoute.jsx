import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
console.log(user,"in production")
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
