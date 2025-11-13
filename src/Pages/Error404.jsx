import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white text-center px-4">
      <div className="bg-white text-gray-800 p-10 rounded-2xl shadow-2xl max-w-md">
        <div className="flex flex-col items-center">
          <FaSadTear className="text-6xl text-indigo-600 mb-4" />
          <h1 className="text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>

      <p className="mt-10 text-sm text-white/80">
        © {new Date().getFullYear()} LearnHub — Your Learning Journey Starts
        Here.
      </p>
    </div>
  );
};

export default Error404;
