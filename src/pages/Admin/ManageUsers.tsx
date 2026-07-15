import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const changeRole = async (id: number, role: string) => {
    try {
      await api.put(`/users/${id}/role`, { role });

      toast.success("Role berhasil diubah!");

      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id: number) => {
    const result = await Swal.fire({
      title: "Delete User?",
      text: "User yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/users/${id}`);

      toast.success("User berhasil dihapus!");

      loadUsers();
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "User gagal dihapus.",
      });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Manage Users</h1>

      <table className="w-full bg-white dark:bg-slate-800 rounded-xl shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b text-center">
              <td className="p-4">{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    user.role === "admin" ? "bg-green-600" : "bg-gray-500"
                  }`}
                >
                  {user.role}
                </span>
              </td>

              <td className="space-x-2">
                <button
                  onClick={() =>
                    changeRole(
                      user.id,
                      user.role === "admin" ? "user" : "admin",
                    )
                  }
                  className="bg-yellow-500 px-4 py-2 rounded text-white"
                >
                  {user.role === "admin" ? "Demote" : "Promote"}
                </button>

                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-600 px-4 py-2 rounded text-white"
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

export default ManageUsers;
