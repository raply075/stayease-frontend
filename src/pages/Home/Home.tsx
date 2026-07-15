import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/hotel/Hero";
import SearchBox from "../../components/hotel/SearchBox";
import Feature from "../../components/hotel/Feature";
import HotelCard from "../../components/hotel/HotelCard";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
import { useHotels } from "../../hooks/useHotels";
import { useState } from "react";

const Home = () => {
  const { hotels, loading } = useHotels();
  const [search, setSearch] = useState("");

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.city.toLowerCase().includes(search.toLowerCase()),
  );
  if (loading) {
    return <div className="text-center mt-20 text-3xl">Loading Hotels...</div>;
  }
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />

      <Container>
        <div className="py-20">
          <div className="mb-10">
            <input
              type="text"
              placeholder="Search hotel or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl font-bold">Featured Hotels</h2>
              <p className="text-gray-500 mt-2">
                Explore our most popular destinations.
              </p>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </Container>

      <Feature />
      <Footer />
    </>
  );
};

export default Home;
