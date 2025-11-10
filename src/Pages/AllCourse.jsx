import React from "react";
import { Link } from "react-router"; 

const AllCourse = ({ course }) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-5 flex flex-col">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />

        <h2 className="text-xl font-bold mb-1 text-gray-800">{course.title}</h2>
        <p className="text-sm text-indigo-600 font-medium mb-2">
          {course.category}
        </p>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-gray-800">${course.price}</span>
          <span className="text-gray-500 text-sm">{course.duration}</span>
        </div>

        <Link
          to={`/course/${course._id}`}
          className="mt-auto bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white text-center py-2 rounded-lg font-medium transition duration-300"
        >
          View Details
        </Link>
      </div>
      
    </div>
  );
};

export default AllCourse;
