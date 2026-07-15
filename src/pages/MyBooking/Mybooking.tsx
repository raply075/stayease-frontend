import { useBookings } from "../../hooks/useBookings";
import { FaCalendarAlt, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const MyBooking = () => {
  const { bookings, loading, removeBooking } = useBookings();

  if (loading) {
    return (
      <div className="text-center text-2xl font-semibold mt-10">Loading...</div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">📖 My Booking</h1>

      <div className="space-y-6">
        {bookings.map((booking: any) => (
          <div
            key={booking.id}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  🏨 {booking.hotel?.name}
                </h2>

                <p className="text-gray-500 mt-1">{booking.hotel?.city}</p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-white font-semibold ${
                  booking.status === "Pending"
                    ? "bg-yellow-500"
                    : booking.status === "Confirmed"
                      ? "bg-green-600"
                      : "bg-red-500"
                }`}
              >
                {booking.status}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-600" />

                <div>
                  <p className="text-sm text-gray-500">Check In</p>

                  <p className="font-semibold">
                    {new Date(booking.check_in).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-red-500" />

                <div>
                  <p className="text-sm text-gray-500">Check Out</p>

                  <p className="font-semibold">
                    {new Date(booking.check_out).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaUsers className="text-green-600" />

                <div>
                  <p className="text-sm text-gray-500">Guests</p>

                  <p className="font-semibold">{booking.guests} Orang</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-yellow-500" />

                <div>
                  <p className="text-sm text-gray-500">Total Price</p>

                  <p className="font-bold text-blue-600">
                    Rp {Number(booking.total_price).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                to={`/booking-detail/${booking.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
              >
                Detail
              </Link>

              <button
                onClick={async () => {
                  const result = await Swal.fire({
                    title: "Batalkan Booking?",
                    text: "Booking yang dibatalkan tidak dapat dipulihkan.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#ef4444",
                    cancelButtonColor: "#3b82f6",
                    confirmButtonText: "Ya, Batalkan",
                    cancelButtonText: "Batal",
                  });

                  if (!result.isConfirmed) return;

                  try {
                    await removeBooking(booking.id);

                    toast.success("Booking berhasil dibatalkan!");
                  } catch (error) {
                    toast.error("Gagal membatalkan booking.");
                  }
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyBooking;
