import Swal from "sweetalert2";
import { deleteAccount, logoutAll } from "../../services/settingsService";

const DangerZone = () => {
  const logout = async () => {
    await logoutAll();

    localStorage.clear();

    window.location.href = "/login";
  };

  const remove = async () => {
    const result = await Swal.fire({
      title: "Delete Account?",

      text: "This action cannot be undone",

      icon: "warning",

      showCancelButton: true,
    });

    if (!result.isConfirmed) return;

    await deleteAccount();

    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <div className="bg-red-50 border border-red-300 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-red-600">🚨 Danger Zone</h2>

      <div className="mt-6 flex gap-4">
        <button
          onClick={logout}
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl"
        >
          Logout All Devices
        </button>

        <button
          onClick={remove}
          className="bg-red-600 text-white px-6 py-3 rounded-xl"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DangerZone;
