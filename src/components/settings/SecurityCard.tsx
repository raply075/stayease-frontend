import { useState } from "react";
import { changePassword } from "../../services/settingsService";
import Swal from "sweetalert2";

const SecurityCard = () => {
  const [current_password, setCurrent] = useState("");
  const [new_password, setNew] = useState("");
  const [new_password_confirmation, setConfirm] = useState("");

  const submit = async () => {
    try {
      await changePassword({
        current_password,
        new_password,
        new_password_confirmation,
      });

      Swal.fire("Success", "Password berhasil diubah", "success");

      setCurrent("");
      setNew("");
      setConfirm("");
    } catch {
      Swal.fire("Oops", "Password lama salah", "error");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">🔒 Security</h2>

      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          value={current_password}
          onChange={(e) => setCurrent(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="New Password"
          value={new_password}
          onChange={(e) => setNew(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={new_password_confirmation}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <button
          onClick={submit}
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecurityCard;
