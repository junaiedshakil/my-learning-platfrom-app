import React, { useEffect, useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthContext";
import {
  PhotoIcon,
  CurrencyDollarIcon,
  ClockIcon,
  TagIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const UpdateCourse = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    price: "",
    duration: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title,
        image: course.image,
        price: course.price,
        duration: course.duration,
        category: course.category,
        description: course.description,
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`https://eduhubserver.vercel.app/learning/${course._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Course updated successfully!");
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire(`Error: ${error.message}`);
        setLoading(false);
      });
  };

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-31 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-4 flex justify-center items-center">
          Update Course
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Update your course details to keep it fresh and relevant.
        </p>

        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 mb-8">
          <img
            src={user?.photoURL || "https://via.placeholder.com/72x72?text=U"}
            alt="Profile"
            className="w-16 h-16 rounded-full border object-cover"
          />
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              {user?.displayName || "Creator Name"}
            </h3>
            <p className="text-sm text-gray-500">
              {user?.email || "your@email.com"}
            </p>
          </div>
        </div>

        <form onSubmit={handleUpdateCourse} className="space-y-5">
          <InputBlock
            icon={<DocumentTextIcon />}
            label="Course Title"
            name="title"
            type="text"
            placeholder="Enter your course title"
            value={formData.title}
            onChange={handleChange}
          />
          <InputBlock
            icon={<PhotoIcon />}
            label="Image URL"
            name="image"
            type="url"
            placeholder="Paste course image URL"
            value={formData.image}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputBlock
              icon={<CurrencyDollarIcon />}
              label="Price"
              name="price"
              type="number"
              placeholder="99"
              value={formData.price}
              onChange={handleChange}
            />
            <InputBlock
              icon={<ClockIcon />}
              label="Duration"
              name="duration"
              type="text"
              placeholder="8 weeks"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>

          <InputBlock
            icon={<TagIcon />}
            label="Category"
            name="category"
            type="text"
            placeholder="AI, Design, Marketing..."
            value={formData.category}
            onChange={handleChange}
          />

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <div className="flex items-start border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 transition">
              <ChatBubbleLeftIcon className="h-5 w-5 text-indigo-500 mt-1 mr-2" />
              <textarea
                id="description"
                name="description"
                placeholder="Describe what this course offers..."
                rows={5}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400 resize-none"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Updating Course..." : "Update Course"}
          </button>
        </form>
      </div>
    </div>
  );
};

const InputBlock = ({
  icon,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const Icon = React.cloneElement(icon, {
    className: "h-5 w-5 text-indigo-500 mr-2",
  });

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 transition">
        {Icon}
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default UpdateCourse;
