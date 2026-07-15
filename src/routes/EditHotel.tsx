import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { updateHotel } from "../services/hotelService";
import toast from "react-hot-toast";

const EditHotel = () => {
  const { id } = useParams();
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
  const [preview, setPreview] = useState("");

  useEffect(() => {
    loadHotel();
  }, []);

  const loadHotel = async () => {
    try {
      const res = await api.get(`/hotels/${id}`);

      setHotel({
        name: res.data.name,
        city: res.data.city,
        description: res.data.description,
        price: res.data.price,
        rating: res.data.rating,
        rooms: res.data.rooms,
      });

      setPreview(`http://127.0.0.1:8000/images/${res.data.image}`);
    } catch (error) {
      console.log(error);
    }
  };

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

      await updateHotel(Number(id), formData);

      toast.success("Hotel berhasil diupdate!");

      navigate("/admin/hotels");
    } catch (error) {
      console.log(error);

      toast.error("Gagal update hotel");
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">Edit Hotel</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={hotel.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="city"
          value={hotel.city}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="description"
          value={hotel.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 h-32"
        />

        <input
          type="number"
          name="price"
          value={hotel.price}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          name="rating"
          value={hotel.rating}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          name="rooms"
          value={hotel.rooms}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <div>
          <p className="mb-2 font-semibold">Current Image</p>

          {preview && (
            <img src={preview} className="w-60 rounded-lg mb-4" alt="hotel" />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);

                setPreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">
          Update Hotel
        </button>
      </form>
    </div>
  );
};

export default EditHotel;
