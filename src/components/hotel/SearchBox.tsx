import Container from "../layout/Container";

const SearchBox = () => {
  return (
    <Container>
      <div className="-mt-12 relative z-10">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Destination"
            className="border rounded-lg p-3 outline-none"
          />

          <input type="date" className="border rounded-lg p-3 outline-none" />

          <input type="date" className="border rounded-lg p-3 outline-none" />

          <input
            type="number"
            placeholder="Guests"
            className="border rounded-lg p-3 outline-none"
          />

          <button className="bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SearchBox;
