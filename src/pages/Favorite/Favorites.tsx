import { useFavorites } from "../../hooks/useFavorites";
import HotelCard from "../../components/hotel/HotelCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">❤️ My Favorite Hotels</h1>

      {favorites.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-20">
          Belum ada hotel favorit.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {favorites.map((item: any) => (
            <HotelCard key={item.id} hotel={item.hotel} />
          ))}
        </div>
      )}
    </>
  );
};

export default Favorites;
