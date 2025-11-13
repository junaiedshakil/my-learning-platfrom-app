import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle, saveUserToDB } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Sign-in successful!");
        saveUserToDB(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        toast.error("Invalid email or password.");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Signin successfully");
        saveUserToDB(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
      <div className="bg-white/90 p-10 rounded-3xl shadow-2xl w-96 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 tracking-wide">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500"
          />
          <a
            href="#"
            className="text-sm text-purple-600 hover:underline text-right"
          >
            Forget Password?
          </a>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-500 transition-all"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-yellow-400 text-white py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-red-500 transition-all"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M21.35 11.1h-9.17v2.83h5.3c-.23 1.22-1.49 3.57-5.3 3.57-3.19 0-5.8-2.63-5.8-5.86s2.61-5.86 5.8-5.86c1.82 0 3.04.77 3.73 1.44l2.54-2.48C18.41 3.56 16.01 2.3 12.18 2.3 6.66 2.3 2.3 6.66 2.3 12.18s4.36 9.88 9.88 9.88c5.73 0 9.53-4.03 9.53-9.7 0-.65-.07-1.15-.26-1.26z"
              />
            </svg>
            Login with Google
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-gray-700">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-purple-600 font-semibold hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
