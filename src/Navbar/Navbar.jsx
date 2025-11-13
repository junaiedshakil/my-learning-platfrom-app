import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";

import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        alert("Sign out successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/viewall", icon: BookOpenIcon, label: "All Courses" },
    ...(user
      ? [
          { to: "/addcourse", icon: BookOpenIcon, label: "Add Course" },
          { to: "/mycourse", icon: UserGroupIcon, label: "My Course" },
          { to: "/myenroll", icon: UserGroupIcon, label: "My Enrolled" },
        ]
      : []),
  ];

  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-purple-100/50 shadow-lg transition-all duration-300">
      {" "}
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        <div className="navbar-start">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4228/4228701.png"
            alt="logo"
            className="h-8 w-8"
          />
          <a className="btn btn-ghost text-xl font-sans bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            EduHub
          </a>{" "}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium shadow-sm"
                        : "text-gray-700 hover:text-indigo-600 hover:from-purple-500/10 hover:to-indigo-500/10 hover:bg-gradient-to-r hover:px-4 hover:rounded-lg"
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 text-indigo-600" />{" "}
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
                    {item.label}
                  </span>{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user ? (
                <div className="w-10 rounded-full ring ring-purple-200 ring-offset-1">
                  {" "}
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User"
                    className="ring-2 ring-white/50"
                  />
                </div>
              ) : (
                <UserCircleIcon className="h-6 w-6 text-gray-600 hover:text-purple-500 transition-colors" />
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white/90 backdrop-blur-sm rounded-box w-52 border border-purple-100"
            >
              {" "}
              {user ? (
                <>
                  <li>
                    <a className="text-gray-700 hover:bg-indigo-50"></a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:bg-indigo-50"></a>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="text-red-600 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    className="text-indigo-600 hover:bg-indigo-50"
                  >
                    <a>Sign In</a>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-end lg:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-indigo-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-sm border-t border-purple-100/50 shadow-md">
          <ul className="menu menu-vertical px-2 py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium"
                        : "text-gray-700 hover:text-indigo-600 hover:from-purple-500/10 hover:to-indigo-500/10 hover:bg-gradient-to-r hover:px-4 hover:rounded-lg"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  <item.icon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
            {user ? (
              <li className="mt-4 pt-2 border-t border-purple-200">
                <button
                  onClick={handleSignOut}
                  className="btn btn-block btn-outline btn-sm border-purple-500 text-purple-600 hover:bg-purple-50"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li className="mt-4 pt-2 border-t border-purple-200">
                <NavLink
                  to="/login"
                  className="btn btn-block btn-outline btn-sm border-indigo-500 text-indigo-600 hover:bg-indigo-50"
                  onClick={toggleMenu}
                >
                  Sign In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
