import { FaStar, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFavorites } from "../../hooks/useFavorites";

type Hotel = {
  id: number;
  name: string;
  city: string;
  price: number;
  rating: number;
  image: string;
};

type Props = {
  hotel: Hotel;
};

const HotelCard = ({ hotel }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const favorite = favorites.find(
    (item: any) => item.hotel_id === hotel.id && item.user_id === user.id,
  );

  const handleFavorite = async () => {
    if (!user.id) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    if (favorite) {
      await removeFavorite(favorite.id);
    } else {
      await addFavorite({
        user_id: user.id,
        hotel_id: hotel.id,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
      }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={`http://127.0.0.1:8000/images/${hotel.image}`}
          alt={hotel.name}
          className="w-full h-60 object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.4,
          }}
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.15 }}
          onClick={handleFavorite}
          className={`absolute top-4 right-4 p-2 rounded-full shadow transition ${
            favorite
              ? "bg-red-500 text-white"
              : "bg-white dark:bg-slate-800 hover:bg-red-500 hover:text-white"
          }`}
        >
          <FaHeart />
        </motion.button>

        <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Best Seller
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: hotel.rating }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-3">{hotel.name}</h2>

        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <FaMapMarkerAlt />
          {hotel.city}
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-sm text-gray-500">Start From</p>

            <h2 className="text-blue-600 text-2xl font-bold">
              Rp {hotel.price.toLocaleString("id-ID")}
            </h2>
          </div>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={`/hotel/${hotel.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Book
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HotelCard;
