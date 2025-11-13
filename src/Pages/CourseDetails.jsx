import React, { useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";

import {
  CurrencyDollarIcon,
  ClockIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const CourseDetails = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleEnroll = () => {
    if (!user) {
      Swal.fire("Please log in first");
      return;
    }
    const enrollment = {
      user_email: user.email,
      course_id: course._id,
      course_title: course.title,
      course_image: course.image,
      course_price: course.price,
      course_duration: course.duration,
      course_category: course.category,
      enrolled_at: new Date(),
    };
    fetch("https://eduhubserver.vercel.app/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrollment),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Successfully enrolled");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Enrollment failed");
      });
  };

  console.log(course);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-purple-100/90 mt-24 flex items-center justify-center">
        <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 animate-fade-in">
          <p className="text-xl text-slate-600 mb-4">
            Course not found or loading failed.
          </p>
          <Link
            to="/viewall"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-purple-100/90 mt-15 px-4 py-11">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-8">
          <div className="relative h-96 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover animate-zoom-in"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 via-white to-indigo-300 bg-clip-text text-transparent">
                {course.title}
              </h1>
              <p className="text-xl opacity-90 bg-white/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm">
                {course.category}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                <BookOpenIcon className="h-7 w-7" />
                Course Overview
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {course.description}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center animate-fade-in-up delay-400">
              <button
                onClick={handleEnroll}
                className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg"
              >
                Enroll Now - ${course.price}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 animate-fade-in-up delay-600">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-center">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-purple-50/70 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-200 rounded-lg">
                      <CurrencyDollarIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-semibold text-gray-800">Price</span>
                  </div>
                  <span className="text-xl font-bold text-purple-600">
                    ${course.price}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-indigo-50/70 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-200 rounded-lg">
                      <ClockIcon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="font-semibold text-gray-800">
                      Duration
                    </span>
                  </div>
                  <span className="text-lg font-medium text-indigo-600">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 text-center animate-fade-in-up delay-800">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-lg">
                {course.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes zoom-in {
          from {
            transform: scale(1.05);
            opacity: 0.9;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoom-in 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default CourseDetails;
