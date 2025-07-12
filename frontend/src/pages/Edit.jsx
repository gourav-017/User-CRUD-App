import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

const Edit = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", age: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/api/users");
      const user = res.data.find(u => u._id === id);
      setForm(user);
    };
    getUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`/api/users/${id}`, form);
    toast.success("User updated successfully!");
    navigate("/");
  } catch (err) {
    toast.error("Update failed",err);
  }
};


  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Edit User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={form.name} onChange={handleChange} className="p-2 border rounded" />
        <input name="age" value={form.age} type="number" onChange={handleChange} className="p-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} className="p-2 border rounded" />
        <button className="bg-blue-600 text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default Edit;
