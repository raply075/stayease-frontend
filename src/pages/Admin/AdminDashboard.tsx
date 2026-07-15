import {
  FaHotel,
  FaUsers,
  FaBook,
  FaHeart,
  FaPlus,
  FaClipboardList,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import StatCard from "../../components/dashboard/StatCard";
import DashboardChart from "../../components/admin/DashboardChart";
import { useDashboard } from "../../services/useDashboard";

const AdminDashboard = () => {
  const { stats, loading } = useDashboard();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-5xl font-bold">Welcome Back Admin 👑</h1>

        <p className="mt-3 text-blue-100 text-lg">
          Manage hotels, bookings and users efficiently.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <StatCard
          title="Hotels"
          value={stats.total_hotels}
          icon={FaHotel}
          color="text-blue-600"
        />

        <StatCard
          title="Users"
          value={stats.total_users}
          icon={FaUsers}
          color="text-green-600"
        />

        <StatCard
          title="Bookings"
          value={stats.total_bookings}
          icon={FaBook}
          color="text-purple-600"
        />

        <StatCard
          title="Favorites"
          value={stats.total_favorites}
          icon={FaHeart}
          color="text-red-600"
        />
      </div>

      {/* Chart */}
      <div className="mt-10">
        <DashboardChart
          totalHotels={stats.total_hotels}
          totalUsers={stats.total_users}
          totalBookings={stats.total_bookings}
          totalFavorites={stats.total_favorites}
        />
      </div>

      {/* Quick Action */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Quick Actions</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/admin/hotels/create"
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <FaPlus className="text-4xl text-blue-600 mb-4" />

            <h3 className="text-xl font-bold">Add Hotel</h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Create a new hotel listing.
            </p>
          </Link>

          <Link
            to="/admin/bookings"
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <FaClipboardList className="text-4xl text-green-600 mb-4" />

            <h3 className="text-xl font-bold">Booking List</h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              View all reservations.
            </p>
          </Link>

          <Link
            to="/admin/users"
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <FaUsers className="text-4xl text-purple-600 mb-4" />

            <h3 className="text-xl font-bold">Manage Users</h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Control user accounts.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
