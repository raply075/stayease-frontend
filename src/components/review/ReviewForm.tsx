import { useState } from "react";
import Swal from "sweetalert2";
import { createReview } from "../../services/reviewService";

type Props = {
  hotelId: number;
  refresh: () => void;
};

const ReviewForm = ({ hotelId, refresh }: Props) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submit = async () => {
    try {
      await createReview({
        hotel_id: hotelId,
        rating,
        comment,
      });

      Swal.fire({
        icon: "success",
        title: "Review berhasil dikirim",
        timer: 1500,
        showConfirmButton: false,
      });

      setComment("");
      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow mt-10">
      <h2 className="text-2xl font-bold mb-6">Tambah Review</h2>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border rounded-xl p-3 w-full"
      >
        {[5, 4, 3, 2, 1].map((item) => (
          <option key={item} value={item}>
            {item} ⭐
          </option>
        ))}
      </select>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border rounded-xl p-3 w-full mt-4"
        rows={4}
        placeholder="Tulis review..."
      />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-5"
      >
        Kirim Review
      </button>
    </div>
  );
};

export default ReviewForm;
