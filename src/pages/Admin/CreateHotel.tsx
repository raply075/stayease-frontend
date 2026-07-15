import { useState } from "react";
import { createHotel } from "../../services/hotelService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateHotel = () => {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState({
    name: "",
    city: "",
    description: "",
    price: "",
    rating: "",
    rooms: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setHotel({
      ...hotel,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", hotel.name);
      formData.append("city", hotel.city);
      formData.append("description", hotel.description);
      formData.append("price", hotel.price);
      formData.append("rating", hotel.rating);
      formData.append("rooms", hotel.rooms);

      if (image) {
        formData.append("image", image);
      }

      await createHotel(formData);

      toast.success("Hotel berhasil ditambahkan!");

      navigate("/admin/hotels");
    } catch (error) {
      console.log(error);
      toast.error("Gagal menambahkan hotel");
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">Add Hotel</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border rounded-lg p-3 h-32"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          name="rooms"
          placeholder="Rooms"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3"
          onChange={(e) => {
            if (e.target.files) {
              setImage(e.target.files[0]);
            }
          }}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Save Hotel
        </button>
      </form>
    </div>
  );
};

export default CreateHotel;
