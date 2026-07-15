import { useContext } from "react";
import {
  FaHotel,
  FaHome,
  FaCalendarAlt,
  FaHeart,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menuClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-white text-blue-700 shadow-lg font-semibold"
        : "text-blue-100 hover:bg-white/20 hover:text-white"
    }`;

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-gradient-to-b from-blue-700 to-blue-900 flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="px-8 py-8 border-b border-blue-500">
        <h1 className="text-3xl font-bold text-white">🏨 StayEase</h1>

        <p className="text-blue-200 mt-2">Hotel Booking System</p>
      </div>

      {/* Menu */}
      <div className="flex-1 px-5 py-6 space-y-2 overflow-y-auto">
        {user?.role === "admin" ? (
          <>
            <NavLink to="/admin" end className={menuClass}>
              <FaHome />
              Dashboard
            </NavLink>

            <NavLink to="/admin/hotels" className={menuClass}>
              <FaHotel />
              Hotels
            </NavLink>

            <NavLink to="/admin/bookings" className={menuClass}>
              <FaCalendarAlt />
              Bookings
            </NavLink>

            <NavLink to="/admin/users" className={menuClass}>
              <FaUser />
              Users
            </NavLink>

            <NavLink to="/profile" className={menuClass}>
              <FaUser />
              Profile
            </NavLink>

            <NavLink to="/admin/settings" className={menuClass}>
              <FaCog />
              Settings
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/dashboard" end className={menuClass}>
              <FaHome />
              Dashboard
            </NavLink>

            <NavLink to="/hotels" className={menuClass}>
              <FaHotel />
              Hotels
            </NavLink>

            <NavLink to="/my-booking" className={menuClass}>
              <FaCalendarAlt />
              My Booking
            </NavLink>

            <NavLink to="/favorites" className={menuClass}>
              <FaHeart />
              Favorites
            </NavLink>

            <NavLink to="/profile" className={menuClass}>
              <FaUser />
              Profile
            </NavLink>

            <NavLink to="/settings" className={menuClass}>
              <FaCog />
              Settings
            </NavLink>
          </>
        )}
      </div>

      {/* Logout */}
      <div className="p-5 border-t border-blue-500">
        <button
          onClick={logout}
          className="flex items-center gap-4 w-full bg-red-500 hover:bg-red-600 transition rounded-xl px-5 py-3 text-white font-semibold"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
