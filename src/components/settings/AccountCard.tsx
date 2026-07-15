import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateProfile } from "../../services/settingsService";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AccountCard = () => {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = async () => {
    try {
      const res = await updateProfile({
        name,
        email,
      });

      setUser(res.data.user);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Profile updated successfully",
      });
    } catch (err) {
      toast.error("Gagal update profile");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">👤 Account Information</h2>

      <div className="space-y-5">
        <div>
          <label className="font-semibold">Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Email</label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
