import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const AdminRoute = ({ children }: Props) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user || user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AdminRoute;
