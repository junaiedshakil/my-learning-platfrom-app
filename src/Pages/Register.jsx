import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser,signInWithGoogle } = use(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

        
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          console.log("Profile updated:", user);
          alert("Registered successfully!");
        });

        
        setName("");
        setEmail("");
        setPhotoURL("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        alert("Registration failed: " + error.message);
      });
  };


  const handleGoogleSignup = () => {
    signInWithGoogle()
    .then((result)=>{
        console.log(result);
        alert("signUp successfully")
    })
    .catch((error)=>{
        console.log(error);
    })
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {passwordError && (
            <p className="text-red-500 text-sm mb-4">{passwordError}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors mb-3"
          >
            Register
          </button>
        </form>

        
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="flex items-center justify-center bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors mb-4 w-full"
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
          Sign up with Google
        </button>

       
        <p className="text-sm text-center">
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
