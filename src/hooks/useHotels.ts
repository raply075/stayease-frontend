import { useEffect, useState } from "react";
import api from "../services/api";

export const useHotels = (filters = {}) => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);

      try {
        const res = await api.get("/hotels", {
          params: {
            ...filters,
            page: currentPage,
          },
        });

        setHotels(res.data.data);
        setCurrentPage(res.data.current_page);
        setLastPage(res.data.last_page);
        setTotal(res.data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [JSON.stringify(filters), currentPage]);

  return {
    hotels,
    loading,
    currentPage,
    lastPage,
    total,
    setCurrentPage,
  };
};
