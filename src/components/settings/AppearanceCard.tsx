import { useState } from "react";
import Swal from "sweetalert2";

const AppearanceCard = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const save = () => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    Swal.fire({
      icon: "success",
      title: "Theme Updated",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">🌙 Appearance</h2>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option value="light">Light</option>

        <option value="dark">Dark</option>
      </select>

      <button
        onClick={save}
        className="ml-4 bg-indigo-600 text-white px-5 py-3 rounded-xl"
      >
        Save
      </button>
    </div>
  );
};

export default AppearanceCard;
