import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const ViewAll = () => {
  const courses = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const unique = [...new Set(courses.map((course) => course.category))];
    return ["all", ...unique];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "all") return courses;
    return courses.filter((course) => course.category === selectedCategory);
  }, [courses, selectedCategory]);

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handcrafted learning experiences designed to inspire and
            empower.
          </p>
        </div>

       
        <div className="flex justify-end mb-10">
          <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg">
            <label className="text-sm font-semibold text-gray-800">
              Filter by Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-60 p-2 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-indigo-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((singleCourse) => (
              <SingleCourse
                singleCourse={singleCourse}
                key={singleCourse._id}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-gray-500">
                No courses found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
