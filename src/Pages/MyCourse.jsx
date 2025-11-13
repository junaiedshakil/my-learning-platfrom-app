import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyCourse = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://eduhubserver.vercel.app/mycourses/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      fetch(`https://eduhubserver.vercel.app/learning/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setCourses(courses.filter((c) => c._id !== id));
          toast.success("Course deleted successfully!");
        })
        .catch((err) => console.error(err));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100">
        <div className="text-center">
          <div className="animate-spin h-16 w-16 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-16 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            My Courses
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your created learning experiences.
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center bg-white/70 backdrop-blur-md py-20 rounded-3xl shadow-lg">
            <p className="text-xl text-gray-500 mb-4">
              No courses yet. Start creating your first one!
            </p>
            <Link
              to="/addcourse"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg"
            >
              Add Course
            </Link>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
            <table className="min-w-full divide-y divide-purple-200">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                {courses.map((course, index) => (
                  <tr
                    key={course._id}
                    className={`${
                      index % 2 === 0 ? "bg-purple-50/40" : "bg-indigo-50/40"
                    } hover:bg-indigo-50 transition`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                      {course.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {course.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-purple-700 font-medium">
                      ${course.price}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {course.duration}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <Link
                          to={`/updatecourse/${course._id}`}
                          className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-xs font-medium shadow-md"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(course._id)}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs font-medium shadow-md"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourse;
