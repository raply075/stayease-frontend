import { FaBell, FaSearch } from "react-icons/fa";

const user = JSON.parse(localStorage.getItem("user") || "{}");

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-slate-800 rounded-2xl shadow-md px-8 py-5 flex items-center justify-between transition-all">
      {/* Search */}
      <div className="relative w-[420px]">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search hotels..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition">
          <FaBell className="text-xl text-gray-600 dark:text-white" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-700 px-3 py-2 rounded-xl">
          <img
            src="https://i.pravatar.cc/60"
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">
              {user.name}
            </h3>

            <p className="text-sm text-gray-500 capitalize">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
