import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton height={45} width={280} />

      <div className="grid md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} height={140} borderRadius={20} />
        ))}
      </div>

      <Skeleton height={320} borderRadius={20} />
    </div>
  );
};

export default DashboardSkeleton;
