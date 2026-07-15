import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <Sidebar />

      <main className="ml-72 p-6">
        <Navbar />

        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
