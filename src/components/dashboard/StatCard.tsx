import type { IconType } from "react-icons";

type Props = {
  title: string;
  value: number;
  color: string;
  icon: IconType;
};

const StatCard = ({ title, value, color, icon: Icon }: Props) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className={`text-5xl font-bold mt-3 ${color}`}>{value}</h2>
        </div>

        <Icon className={`text-6xl ${color}`} />
      </div>
    </div>
  );
};

export default StatCard;
