import { Navigate } from "react-router-dom";
import { useUserStore } from "../context/useUserStore.js";

export const AdminRoute = ({ children }) => {
  const userData = useUserStore((state) => state.userData);

  if (!userData) return null; // Or loading screen

  return userData.role === "admin" ? children : <Navigate to="/" />;
};
