import React, { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import {
  UserCircleIcon,
  PhotoIcon,
  CurrencyDollarIcon,
  ClockIcon,
  TagIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddCourse = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newCourse = {
      title: form.title.value,
      image: form.image.value,
      price: parseFloat(form.price.value),
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
      owner_name: user?.displayName || "Unknown Creator",
      owner_email: user?.email || "unknown@example.com",
      owner_photo: user?.photoURL || "",
      created_at: new Date(),
    };

    fetch(
      `${"http://localhost:3000"}/learning`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Course added successfully!");
        form.reset();
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire(`Error: ${error.message}`);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-34 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-4 flex justify-center items-center">
          Add New Course
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Share your knowledge and inspire others.
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

        <form onSubmit={handleAddCourse} className="space-y-5">
          <InputBlock
            icon={<DocumentTextIcon />}
            label="Course Title"
            name="title"
            type="text"
            placeholder="Enter your course title"
          />
          <InputBlock
            icon={<PhotoIcon />}
            label="Image URL"
            name="image"
            type="url"
            placeholder="Paste course image URL"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputBlock
              icon={<CurrencyDollarIcon />}
              label="Price"
              name="price"
              type="number"
              placeholder="99"
            />
            <InputBlock
              icon={<ClockIcon />}
              label="Duration"
              name="duration"
              type="text"
              placeholder="8 weeks"
            />
          </div>

          <InputBlock
            icon={<TagIcon />}
            label="Category"
            name="category"
            type="text"
            placeholder="AI, Design, Marketing..."
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
                required
              ></textarea>
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Adding Course..." : "Add Course"}
          </button>
        </form>
      </div>
    </div>
  );
};


const InputBlock = ({ icon, label, name, type, placeholder }) => {
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
          required
        />
      </div>
    </div>
  );
};

export default AddCourse;
