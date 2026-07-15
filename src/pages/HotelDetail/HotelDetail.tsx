import { useHotels } from "../../hooks/useHotels";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ReviewList from "../../components/review/ReviewList";
import ReviewForm from "../../components/review/ReviewForm";
import { useReviews } from "../../hooks/useReviews";
import ReviewSkeleton from "../../components/ui/ReviewSkeleton";

const HotelDetail = () => {
  const { id } = useParams();
  const { hotels, loading } = useHotels();
  const { reviews, loading: reviewLoading, refresh } = useReviews(Number(id));
  const navigate = useNavigate();

  const hotel = hotels.find((item) => item.id === Number(id));

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum: number, review: any) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : hotel?.rating?.toString() || "0";

  if (!hotel) {
    if (loading) {
      return <div className="text-center mt-20 text-3xl">Loading...</div>;
    }

    return (
      <div className="text-center mt-20 text-3xl">Hotel tidak ditemukan.</div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        <img
          src={`http://127.0.0.1:8000/images/${hotel.image}`}
          alt={hotel.name}
          className="w-full h-[500px] object-cover"
        />

        {/* Detail Hotel */}
        <div className="p-10">
          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-yellow-500 text-xl">
              {Array.from({
                length: Math.round(Number(averageRating)),
              }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <span className="font-bold text-xl">{averageRating}</span>

            <span className="text-gray-500">({reviews.length} Reviews)</span>
          </div>

          {/* Nama Hotel */}
          <h1 className="text-5xl font-bold">{hotel.name}</h1>

          {/* Kota */}
          <div className="flex items-center gap-2 text-gray-500 mt-4">
            <FaMapMarkerAlt />
            {hotel.city}
          </div>

          {/* Deskripsi */}
          <p className="mt-8 text-lg text-gray-700 leading-8">
            Experience luxury accommodation with premium facilities, swimming
            pool, restaurant, spa, fitness center, free WiFi, and breathtaking
            views.
          </p>

          {/* Harga */}
          <div className="mt-10 flex justify-between items-center">
            <div>
              <p className="text-gray-500">Price per Night</p>

              <h2 className="text-4xl font-bold text-blue-600">
                Rp {hotel.price.toLocaleString("id-ID")}
              </h2>
            </div>

            <button
              onClick={() => navigate("/booking", { state: hotel })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg"
            >
              Book Now
            </button>
          </div>

          {/* Review */}
          <div className="mt-16 border-t pt-10">
            <h2 className="text-3xl font-bold mb-8">Review Pengguna</h2>

            {/* Summary */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 dark:bg-slate-700 rounded-xl p-6 text-center">
                <h3 className="text-5xl font-bold text-blue-600">
                  {averageRating}
                </h3>

                <p className="text-gray-500 mt-2">Average Rating</p>
              </div>

              <div className="bg-gray-100 dark:bg-slate-700 rounded-xl p-6 text-center">
                <h3 className="text-5xl font-bold text-green-600">
                  {reviews.length}
                </h3>

                <p className="text-gray-500 mt-2">Total Reviews</p>
              </div>
            </div>

            {/* List Review */}
            {reviewLoading ? (
              <ReviewSkeleton />
            ) : (
              <ReviewList reviews={reviews} />
            )}

            {/* Form */}
            <div className="mt-10">
              <ReviewForm hotelId={Number(id)} refresh={refresh} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
