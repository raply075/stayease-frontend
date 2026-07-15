import StatCard from "../../components/dashboard/StatCard";
import HotelCard from "../../components/hotel/HotelCard";
import { useHotels } from "../../hooks/useHotels";
import { useBookings } from "../../hooks/useBookings";
import { useFavorites } from "../../hooks/useFavorites";
import { FaHotel, FaHeart, FaHistory } from "react-icons/fa";
import DashboardSkeleton from "../../components/ui/DashboardSkeleton";

const user = JSON.parse(localStorage.getItem("user") || "{}");

const Dashboard = () => {
  const { hotels, loading } = useHotels();

  const { bookings } = useBookings();
  const { favorites } = useFavorites();

  const myBookings = bookings.filter((item: any) => item.user_id === user.id);

  const myFavorites = favorites.filter((item: any) => item.user_id === user.id);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-5xl font-bold">Welcome Back, {user.name} 👋</h1>

        <p className="mt-3 text-blue-100 text-lg">
          Discover amazing hotels and manage your bookings easily.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <StatCard
          title="Total Booking"
          value={myBookings.length}
          color="text-blue-600"
          icon={FaHotel}
        />

        <StatCard
          title="Favorite"
          value={myFavorites.length}
          color="text-red-500"
          icon={FaHeart}
        />

        <StatCard
          title="History"
          value={
            myBookings.filter((item: any) => item.status !== "Pending").length
          }
          color="text-green-500"
          icon={FaHistory}
        />
      </div>

      {/* Quick Actions */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-xl">🏨 Browse Hotels</h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Explore hundreds of hotels.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-xl">❤️ Favorites</h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              View your saved hotels.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-xl">📖 My Booking</h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Track your reservations.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Hotels */}
      <div className="mt-16">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Recommended Hotels</h2>

            <p className="text-gray-500 dark:text-gray-400">
              Top destinations for your next trip.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {hotels.slice(0, 3).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>

      {/* Recent Booking */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Recent Booking</h2>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
          {myBookings.length === 0 ? (
            <p className="text-gray-500">No bookings yet.</p>
          ) : (
            myBookings.slice(0, 3).map((booking: any) => (
              <div
                key={booking.id}
                className="flex justify-between items-center border-b last:border-none py-4"
              >
                <div>
                  <h3 className="font-bold">{booking.hotel?.name}</h3>

                  <p className="text-gray-500">{booking.check_in}</p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-white ${
                    booking.status === "Confirmed"
                      ? "bg-green-600"
                      : booking.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
