import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <label className="block mb-2 text-sm font-medium">Email Address</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-red-400 text-white py-2 rounded mb-4 hover:bg-red-500"
        >
          Sign In
        </button>
        <p className="text-center text-sm">
          Don't have an account? 
          <span 
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <label className="block mb-2 text-sm font-medium">Full Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block mb-2 text-sm font-medium">Email Address</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-400 text-white py-2 rounded mb-4 hover:bg-green-500"
        >
          Sign Up
        </button>
        <p className="text-center text-sm">
          Already have an account? 
          <span 
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export { Login, Signup };
