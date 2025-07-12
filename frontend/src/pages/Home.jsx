import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    toast.success("User deleted!");
    fetchUsers();
  } catch (err) {
    toast.error("Delete failed",err);
  }
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <button onClick={() => navigate("/create")} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Add User</button>
      <table className="w-full border">
        <thead className="bg-gray-100 text-center">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="p-2 border text-center">{user.name}</td>
              <td className="p-2 border text-center">{user.age}</td>
              <td className="p-2 border text-center">{user.email}</td>
              <td className="p-2 border text-center">
                <button onClick={() => navigate(`/edit/${user._id}`)} className=" mr-2 bg-yellow-500 px-3 py-1 text-white rounded">Edit</button>
                <button onClick={() => deleteUser(user._id)} className="bg-red-500 px-3 py-1 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
