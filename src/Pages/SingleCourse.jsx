import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ singleCourse }) => {
  return (
    <div className="group">
      <div
        className="bg-gradient-to-br from-white via-gray-100 to-gray-200
                    rounded-2xl shadow-md hover:shadow-lg
                    hover:scale-[1.03] transition-all duration-300
                    p-6 flex flex-col h-full min-h-[450px] text-gray-800"
      >
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={singleCourse.image}
            alt={singleCourse.title}
            className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <h2 className="text-xl font-bold mb-3 text-center flex-shrink-0 transition-colors duration-300 group-hover:text-purple-600">
          {singleCourse.title}
        </h2>

        <p className="text-gray-700 text-sm mb-6 line-clamp-3 text-center leading-relaxed flex-grow">
          {singleCourse.description}
        </p>

        <div className="flex justify-between items-center mb-6 text-center flex-shrink-0 min-h-[40px]">
          <span className="font-semibold bg-gray-100 px-3 py-1 rounded-full">
            ${singleCourse.price}
          </span>
          <span className="text-gray-500 text-sm">{singleCourse.duration}</span>
        </div>

        <Link
          to={`/course/${singleCourse._id}`}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500
                     hover:from-indigo-500 hover:to-purple-500
                     text-white text-center py-3 rounded-full font-medium
                     transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleCourse;
