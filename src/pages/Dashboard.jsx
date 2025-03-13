import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";

const Dashboard = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email") || "User";

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/logout");

      // Clear tokens from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      // Redirect to Login
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
      <h1 className="text-3xl">Welcome to {email}</h1>
    </div>
  );
};

export default Dashboard;
