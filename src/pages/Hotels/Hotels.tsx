import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHotels } from "../../hooks/useHotels";
import HotelCard from "../../components/hotel/HotelCard";
import HotelCardSkeleton from "../../components/ui/HotelCardSkeleton";
import EmptyState from "../../components/ui/EmptyState";

const Hotels = () => {
  const [filters, setFilters] = useState({
    search: "",
    city: "",
    rating: "",
    price: "",
  });

  const { hotels, loading, currentPage, lastPage, setCurrentPage } =
    useHotels(filters);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-5">
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <HotelCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Explore Hotels</h1>

          <p className="text-gray-500 mt-2">Find your perfect place to stay.</p>
        </div>

        <div className="text-right">
          <h2 className="text-2xl font-bold text-blue-600">{hotels.length}</h2>

          <p className="text-gray-500">Hotels Found</p>
        </div>
      </div>

      {/* FILTER */}

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-10">
        <div className="grid md:grid-cols-4 gap-5">
          {/* SEARCH */}

          <div className="relative">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search Hotel..."
              className="w-full border rounded-xl pl-11 pr-4 py-3"
              value={filters.search}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  search: e.target.value,
                })
              }
            />
          </div>

          {/* CITY */}

          <select
            className="border rounded-xl p-3"
            value={filters.city}
            onChange={(e) =>
              setFilters({
                ...filters,
                city: e.target.value,
              })
            }
          >
            <option value="">All City</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Yogyakarta">Yogyakarta</option>
            <option value="Bali">Bali</option>
          </select>

          {/* RATING */}

          <select
            className="border rounded-xl p-3"
            value={filters.rating}
            onChange={(e) =>
              setFilters({
                ...filters,
                rating: e.target.value,
              })
            }
          >
            <option value="">All Rating</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★+</option>
            <option value="3">★★★+</option>
          </select>

          {/* PRICE */}

          <input
            type="number"
            placeholder="Max Price"
            className="border rounded-xl p-3"
            value={filters.price}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* HOTEL */}

      <div className="grid md:grid-cols-3 gap-8">
        {hotels.length > 0 ? (
          hotels.map((hotel: any) => <HotelCard key={hotel.id} hotel={hotel} />)
        ) : (
          <div className="col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-16 text-center">
              <EmptyState />

              <p className="text-gray-500 mt-4">Coba ubah filter pencarian.</p>
            </div>
          </div>
        )}
      </div>

      {/* PAGINATION */}

      <div className="flex justify-center items-center gap-5 mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-5 py-3 rounded-xl bg-gray-300 disabled:opacity-40"
        >
          Previous
        </button>

        <span className="font-bold text-lg">
          {currentPage} / {lastPage}
        </span>

        <button
          disabled={currentPage === lastPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-5 py-3 rounded-xl bg-blue-600 text-white disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Hotels;
