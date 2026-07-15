import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

const BookingDetail = () => {
  const { id } = useParams();

  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    loadBooking();
  }, []);

  const loadBooking = async () => {
    try {
      const res = await api.get(`/bookings/${id}`);
      setBooking(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!booking) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">Booking Detail</h1>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
        <img
          src={`http://127.0.0.1:8000/images/${booking.hotel.image}`}
          className="rounded-xl h-80 w-full object-cover mb-8"
        />

        <h2 className="text-3xl font-bold">{booking.hotel.name}</h2>

        <p className="text-gray-500 mt-2">{booking.hotel.city}</p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <p className="font-semibold">Check In</p>
            <p>{booking.check_in}</p>
          </div>

          <div>
            <p className="font-semibold">Check Out</p>
            <p>{booking.check_out}</p>
          </div>

          <div>
            <p className="font-semibold">Guests</p>
            <p>{booking.guests}</p>
          </div>

          <div>
            <p className="font-semibold">Status</p>
            <p>{booking.status}</p>
          </div>

          <div>
            <p className="font-semibold">Total Price</p>
            <p>Rp {Number(booking.total_price).toLocaleString("id-ID")}</p>
          </div>
        </div>

        <Link
          to="/my-booking"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default BookingDetail;
