import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getBookings = async () => {
    try {
      const res = await api.get("/bookings");
      setBookings(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    const result = await Swal.fire({
      title: status === "Confirmed" ? "Approve Booking?" : "Reject Booking?",
      text:
        status === "Confirmed"
          ? "Booking akan disetujui."
          : "Booking akan ditolak.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: status === "Confirmed" ? "#16a34a" : "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: status === "Confirmed" ? "Approve" : "Reject",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      await api.put(`/bookings/${id}/status`, {
        status,
      });

      toast.success(
        status === "Confirmed"
          ? "Booking berhasil disetujui!"
          : "Booking berhasil ditolak!",
      );

      getBookings();
    } catch (error) {
      console.log(error);

      toast.error("Gagal mengubah status");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Manage Bookings</h1>

      <table className="w-full bg-white dark:bg-slate-800 rounded-xl shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4">User</th>
            <th>Hotel</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Guests</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b text-center">
              <td className="p-4">{booking.user?.name}</td>

              <td>{booking.hotel?.name}</td>

              <td>{booking.check_in}</td>

              <td>{booking.check_out}</td>

              <td>{booking.guests}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    booking.status === "Pending"
                      ? "bg-yellow-500"
                      : booking.status === "Confirmed"
                        ? "bg-green-600"
                        : "bg-red-600"
                  }`}
                >
                  {booking.status}
                </span>
              </td>

              <td className="space-x-2">
                <button
                  onClick={() => updateStatus(booking.id, "Confirmed")}
                  className="bg-green-600 text-white px-3 py-2 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(booking.id, "Cancelled")}
                  className="bg-red-600 text-white px-3 py-2 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageBookings;
