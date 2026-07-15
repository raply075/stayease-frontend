import { useEffect, useState } from "react";
import { getBookings, deleteBooking } from "../services/bookingService";

export const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = () => {
    setLoading(true);

    getBookings()
      .then((res) => {
        setBookings(res.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const removeBooking = async (id: number) => {
    await deleteBooking(id);

    fetchBookings();
  };

  return {
    bookings,
    loading,
    removeBooking,
  };
};
