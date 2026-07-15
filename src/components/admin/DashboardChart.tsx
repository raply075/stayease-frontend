import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props = {
  totalHotels: number;
  totalUsers: number;
  totalBookings: number;
  totalFavorites: number;
};

const DashboardChart = ({
  totalHotels,
  totalUsers,
  totalBookings,
  totalFavorites,
}: Props) => {
  const data = {
    labels: ["Hotels", "Users", "Bookings", "Favorites"],
    datasets: [
      {
        label: "Total Data",
        data: [totalHotels, totalUsers, totalBookings, totalFavorites],
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 mt-8">
      <Bar data={data} />
    </div>
  );
};

export default DashboardChart;
