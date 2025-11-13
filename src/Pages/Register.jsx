import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, signInWithGoogle, saveUserToDB } =
    useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

   
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!uppercasePattern.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!lowercasePattern.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName: name, photoURL })
          .then(() => {
            toast.success("Registration successful!");
            saveUserToDB(user);
            navigate("/"); 
          })
          .catch((error) => console.error("Profile update failed:", error));

        setName("");
        setEmail("");
        setPhotoURL("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        toast.success("Registration failed: " + error.message);
      });
  };

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Sign up successfully!");
        saveUserToDB(user);
        navigate("/"); 
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {passwordError && (
            <p className="text-red-500 text-sm mb-3 text-left">
              {passwordError}
            </p>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-500 transition-all my-3.5"
          >
            Register
          </button>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-yellow-400 text-white py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-red-500 transition-all"
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
            Register with Google
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
