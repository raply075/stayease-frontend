import { useEffect, useState } from "react";
import { FaUserCircle, FaUserShield, FaEnvelope, FaSave } from "react-icons/fa";
import toast from "react-hot-toast";
import { getProfile, updateProfile } from "../../services/profileService";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<any>({
    name: "",
    email: "",
    role: "",
    created_at: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await getProfile();

      setUser(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Gagal mengambil profile");
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async () => {
    try {
      await updateProfile({
        name: user.name,
        email: user.email,
      });

      toast.success("Profile berhasil diperbarui");
    } catch (err) {
      console.log(err);
      toast.error("Gagal update profile");
    }
  };

  if (loading)
    return (
      <div className="text-center mt-20 text-2xl font-bold">Loading...</div>
    );

  return (
    <div className="max-w-5xl mx-auto py-10">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-xl">
        <div className="flex items-center gap-8">
          <FaUserCircle size={110} />

          <div>
            <h1 className="text-4xl font-bold">{user.name}</h1>

            <p className="text-blue-100 mt-2">{user.email}</p>

            <div className="mt-4 inline-flex items-center gap-2 bg-white dark:bg-slate-800/20 px-4 py-2 rounded-full">
              <FaUserShield />

              {user.role.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Card */}

      <div className="bg-white dark:bg-slate-800 mt-10 rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-bold mb-8">Edit Profile</h2>

        <div className="space-y-6">
          <div>
            <label className="font-semibold">Name</label>

            <input
              className="w-full border rounded-xl p-4 mt-2"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="font-semibold flex items-center gap-2">
              <FaEnvelope />
              Email
            </label>

            <input
              className="w-full border rounded-xl p-4 mt-2"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="font-semibold">Member Since</label>

            <input
              disabled
              className="w-full bg-gray-100 rounded-xl p-4 mt-2"
              value={new Date(user.created_at).toLocaleDateString("id-ID")}
            />
          </div>

          <button
            onClick={saveProfile}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3"
          >
            <FaSave />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
