import { FaStar, FaUserCircle } from "react-icons/fa";

type Props = {
  reviews: any[];
};

const ReviewList = ({ reviews }: Props) => {
  if (reviews.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-8 text-center">
        <p className="text-gray-500">Belum ada review.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <FaUserCircle className="text-5xl text-gray-400" />

              <div>
                <h3 className="font-bold text-lg">{review.user?.name}</h3>

                <div className="flex text-yellow-500 mt-1">
                  {Array.from({
                    length: review.rating,
                  }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              {new Date(review.created_at).toLocaleDateString("id-ID")}
            </p>
          </div>

          <p className="mt-5 text-gray-600 dark:text-gray-300 leading-7">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
