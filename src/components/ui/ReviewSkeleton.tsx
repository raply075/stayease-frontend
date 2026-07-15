import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ReviewSkeleton = () => {
  return (
    <div className="space-y-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow"
        >
          <Skeleton width={180} />

          <Skeleton width={100} className="mt-3" />

          <Skeleton count={2} className="mt-4" />
        </div>
      ))}
    </div>
  );
};

export default ReviewSkeleton;
