import { useLocation } from "react-router-dom";
import { useState } from "react";
import { createBooking } from "../../services/bookingService";
import toast from "react-hot-toast";

const Booking = () => {
  const { state: hotel } = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      await createBooking({
        user_id: user.id,
        hotel_id: hotel.id,
        check_in: form.checkIn,
        check_out: form.checkOut,
        guests: Number(form.guests),
        total_price: hotel.price,
        status: "Pending",
      });

      toast.success("Booking berhasil!");

      setForm({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
      });
    } catch (error) {
      console.log(error);

      toast.error("Booking gagal");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8">Booking Hotel</h1>

        {hotel && (
          <div className="mb-8 p-5 bg-blue-50 rounded-xl">
            <h2 className="text-2xl font-bold">{hotel.name}</h2>

            <p>{hotel.city}</p>

            <p className="text-blue-600 font-bold mt-2">
              Rp {hotel.price.toLocaleString("id-ID")} / Night
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            name="checkIn"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            name="checkOut"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
