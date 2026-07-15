import { useEffect, useState } from "react";
import api from "../services/api";

type DashboardData = {
  total_hotels: number;
  total_users: number;
  total_bookings: number;
  total_favorites: number;
};

export const useDashboard = () => {
  const [stats, setStats] = useState<DashboardData>({
    total_hotels: 0,
    total_users: 0,
    total_bookings: 0,
    total_favorites: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/dashboard")
      .then((res) => setStats(res.data))
      .finally(() => setLoading(false));
  }, []);

  return {
    stats,
    loading,
  };
};
