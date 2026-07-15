import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-blue-600">404</h1>

      <p className="text-2xl mt-5">Halaman tidak ditemukan</p>

      <Link to="/" className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl">
        Kembali ke Home
      </Link>
    </div>
  );
};

export default NotFound;
