import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./AuthContext";

export function Public({ children }) {
  const { user } = useContext(Context);

  if (!user) {
    return children
  } else {
    return <Navigate to="/admin" replace />;
  }
}