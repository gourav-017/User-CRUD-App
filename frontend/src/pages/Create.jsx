import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [form, setForm] = useState({ name: "", age: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await axios.post("http://localhost:5000/api/users", form);
    toast.success("User created successfully!");
    navigate("/");
  } catch (err) {
    toast.error("Failed to create user",err);
  }
};

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Add User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="p-2 border rounded" />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} className="p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded" />
        <button className="bg-green-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Create;
