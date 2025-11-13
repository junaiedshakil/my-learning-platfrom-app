import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
 
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4228/4228701.png"
              alt="logo"
              className="h-8 w-8"
            />
            <h2 className="text-xl font-semibold text-white">EduHub</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            LearnSphere is your trusted platform to explore new skills, upskill
            your knowledge, and achieve your learning goals from anywhere in the
            world.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-full transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/viewall" className="hover:text-indigo-400 transition">
                All Courses
              </Link>
            </li>
            <li>
              <Link
                to="/addcourse"
                className="hover:text-indigo-400 transition"
              >
                Add Course
              </Link>
            </li>
            <li>
              <Link to="/mycourse" className="hover:text-indigo-400 transition">
                My Courses
              </Link>
            </li>
            <li>
              <Link to="/myenroll" className="hover:text-indigo-400 transition">
                My Enrolls
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-400" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-400" />
              <span>support@learnsphere.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-400" />
              <span>+880 1234-567890</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LearnSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
