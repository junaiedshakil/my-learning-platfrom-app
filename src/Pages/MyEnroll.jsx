import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { Link } from "react-router-dom";

const MyEnroll = () => {
  const { user } = useContext(AuthContext);
  const [enrollCourse, setEnrollCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://eduhubserver.vercel.app/enrollCourse/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setEnrollCourse(data);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-purple-100/90 mt-24 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl text-slate-600">
            Loading your enrolled courses...
          </p>
        </div>
      </div>
    );
  }

  if (!enrollCourse.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-purple-100/90 mt-24 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 max-w-md">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            No Enrollments Yet
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Discover amazing courses and start your learning journey.
          </p>
          <Link
            to="/viewall"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-purple-100/90 mt-16 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-4">
            My Enrolled Courses
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dive into your personalized learning library—handpicked for growth
            and inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {enrollCourse.map((course) => (
            <div
              key={course._id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 flex flex-col border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group min-h-[28rem]"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48 flex-shrink-0">
                <img
                  src={course.course_image}
                  alt={course.course_title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="font-bold text-xl mb-2 text-gray-800 leading-tight group-hover:text-purple-700 transition-colors duration-300 flex-grow">
                  {course.course_title}
                </h2>

                <p className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.course_category}
                  </span>
                </p>
              </div>

              <div className="flex justify-between items-center mb-6 text-center flex-shrink-0 mt-auto">
                <span className="font-bold text-lg text-purple-600">
                  ${course.course_price}
                </span>
                <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {course.course_duration}
                </span>
              </div>

              <Link
                to={`/course/${course.course_id}`}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-full font-medium text-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex-shrink-0"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEnroll;
