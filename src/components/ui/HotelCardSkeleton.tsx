import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HotelCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <Skeleton height={240} />

      <div className="p-5">
        <Skeleton width={120} />

        <Skeleton height={28} className="mt-3" />

        <Skeleton width={150} className="mt-3" />

        <Skeleton height={40} className="mt-6" />
      </div>
    </div>
  );
};

export default HotelCardSkeleton;
