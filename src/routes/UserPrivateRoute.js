import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserPrivateRoute = () => {
  const { user } = useSelector((state) => state);
  if (!user?.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default UserPrivateRoute;
