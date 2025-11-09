import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";

const Login = () => {
    const {signInUser, signInWithGoogle}=use(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    signInUser();
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then((result)=>{
        console.log(result)
        alert("signin successfully")
    .catch((error)=>{
        console.log(error)
    })
    })
   
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <a
            href="#"
            className="text-sm text-blue-500 mb-4 hover:underline text-right"
          >
            Forget Password?
          </a>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors mb-3"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
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

       
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-500 hover:underline">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
