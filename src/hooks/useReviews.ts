import { useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";

export const useReviews = (hotelId: number) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    setLoading(true);

    try {
      const res = await getReviews(hotelId);
      setReviews(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hotelId) {
      fetchReviews();
    }
  }, [hotelId]);

  return {
    reviews,
    loading,
    refresh: fetchReviews,
  };
};
