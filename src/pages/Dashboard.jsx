import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const userEmail = localStorage.getItem("user_email");

  if (!token) {
    navigate("/"); // Redirect to login if no token
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="mb-2"><strong>Email:</strong> {userEmail}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
