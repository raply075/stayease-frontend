import { useHotels } from "../../hooks/useHotels";
import { Link } from "react-router-dom";
import { deleteHotel } from "../../services/hotelService";

import Swal from "sweetalert2";

const ManageHotels = () => {
  const { hotels, loading } = useHotels();

  if (loading) return <div>Loading...</div>;
  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Delete Hotel?",
      text: "Data yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteHotel(id);

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Hotel berhasil dihapus.",
        timer: 1500,
        showConfirmButton: false,
      });

      window.location.reload();
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Hotel gagal dihapus.",
      });
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Manage Hotels</h1>

        <Link
          to="/admin/hotels/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + Add Hotel
        </Link>
      </div>

      <table className="w-full bg-white dark:bg-slate-800 rounded-xl shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4">Image</th>
            <th>Name</th>
            <th>City</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id} className="border-b">
              <td className="p-3">
                <img
                  src={`http://127.0.0.1:8000/images/${hotel.image}`}
                  className="w-24 rounded"
                />
              </td>

              <td>{hotel.name}</td>

              <td>{hotel.city}</td>

              <td>Rp {hotel.price.toLocaleString("id-ID")}</td>

              <td>{hotel.rating} ⭐</td>

              <td className="space-x-2">
                <Link
                  to={`/admin/hotels/edit/${hotel.id}`}
                  className="bg-yellow-500 px-4 py-2 rounded text-white"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(hotel.id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageHotels;
