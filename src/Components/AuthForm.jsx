import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode }) => {
  const isLogin = mode === "login";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("authToken", "dummy-token");
    alert(`${isLogin ? "Logged in" : "Registered"} successfully!`);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? "Login" : "Register"}</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
