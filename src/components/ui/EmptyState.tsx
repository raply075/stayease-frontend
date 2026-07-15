import { FaHotel } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div className="text-center py-20">
      <FaHotel className="mx-auto text-7xl text-gray-300" />

      <h2 className="text-3xl font-bold mt-6">Hotel tidak ditemukan</h2>

      <p className="text-gray-500 mt-3">Coba ubah filter pencarian.</p>
    </div>
  );
};

export default EmptyState;
