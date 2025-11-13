import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { useLoaderData } from "react-router-dom";
import { GiBullseye } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaEarthAfrica, FaSackDollar } from "react-icons/fa6";

const whyChooseUs = [
  {
    icon: (
      <div className="flex justify-center items-center h-32">
        <GiBullseye className="text-red-600 text-6xl" />
      </div>
    ),
    title: "Expert Curated Content",
    desc: "Handpicked by industry leaders for real-world impact.",
  },
  {
    icon: (
      <div className="flex justify-center items-center h-32">
        <AiFillThunderbolt className="text-orange-500 text-6xl" />
      </div>
    ),
    title: "Lightning-Fast Learning",
    desc: "Bite-sized modules with 2x speed playback.",
  },
  {
    icon: (
      <div className="flex justify-center items-center h-32">
        <FaEarthAfrica className="text-green-500 text-6xl" />
      </div>
    ),
    title: "Global Learning Community",
    desc: "Connect with 50K+ learners worldwide.",
  },
  {
    icon: (
      <div className="flex justify-center items-center h-32">
        <FaSackDollar className="text-yellow-400 text-6xl" />
      </div>
    ),
    title: "Lifetime Course Access",
    desc: "One payment, endless knowledge—no subscriptions.",
  },
];

const topInstructors = [
  {
    name: "Dr. Elena Voss",
    title: "AI & Machine Learning",
    photo:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop&crop=face",
    bio: "10+ years at Google, 100K students taught.",
  },
  {
    name: "Alex Rivera",
    title: "Web Development",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack wizard, built apps for Fortune 500.",
  },
  {
    name: "Maya Singh",
    title: "Creative Design",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning designer, Adobe evangelist.",
  },
  {
    name: "Prof. Sofia Patel",
    title: "Artificial Intelligence",
    photo:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face",
    bio: "PhD from Stanford,neural networks, 300+ publications.",
  },
];

const Home = () => {
  const courses = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  console.log(courses);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-500 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/20"></div>

      <section
        className="relative z-10 pt-32 pb-20 text-center text-white min-h-[70vh] flex flex-col justify-center items-center px-4"
        data-aos="fade-down"
      >
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Unlock Your Future with EduHub
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Dive into world-class courses designed for dreamers and doers. From
          coding mastery to creative breakthroughs—your journey starts here.
        </p>
        <div className="space-x-4" data-aos="zoom-in" data-aos-delay="600">
          <Link to="/viewall">
            <button className="btn btn-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              Explore Courses
            </button>
          </Link>
          <Link to="/register">
            <button className="btn btn-lg btn-outline border-white/70 text-white hover:bg-white/10 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
          </Link>
        </div>

        <div
          className="mt-12 grid grid-cols-3 gap-8 max-w-4xl mx-auto opacity-80"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div
            className="text-center"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <div className="text-3xl font-bold text-purple-200 mb-1">50K+</div>
            <div className="text-sm">Active Learners</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1000">
            <div className="text-3xl font-bold text-pink-200 mb-1">500+</div>
            <div className="text-sm">Expert Courses</div>
          </div>
          <div
            className="text-center"
            data-aos="fade-right"
            data-aos-delay="1100"
          >
            <div className="text-3xl font-bold text-indigo-200 mb-1">95%</div>
            <div className="text-sm">Success Rate</div>
          </div>
        </div>
      </section>

      <section
        className="relative z-10 bg-white/10 backdrop-blur-sm py-16 px-4"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12 text-white drop-shadow-md"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Trending Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.slice(0, 8).map((course, index) => (
              <div
                key={course._id}
                data-aos="zoom-in"
                data-aos-delay={`${index * 150}ms`}
                className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-white/30 shadow-xl hover:bg-white/40 hover:border-purple-300">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-xl group-hover:scale-110 transition-transform">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                    />
                    <div className="absolute top-2 right-2 badge badge-primary bg-gradient-to-r from-indigo-500 to-purple-500">
                      {course.category}
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-indigo-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 flex-grow line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="font-semibold text-purple-300">
                      ${course.price}
                    </span>
                    <span className="text-indigo-200">{course.duration}</span>
                  </div>
                  <Link
                    to={`/course/${course._id}`}
                    className="btn btn-sm w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white font-medium shadow-md transform hover:scale-105 transition-all"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/viewall">
              <button
                className="btn btn-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative z-10 py-20 px-4 bg-white/5 backdrop-blur-sm"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg"
            data-aos="fade-down"
          >
            Why Choose EduHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${index * 200}ms`}
                className="group transform transition-all duration-700"
              >
                <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <div className="text-5xl mb-4 opacity-80 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-10 py-20 px-4 bg-white/5 backdrop-blur-sm"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg"
            data-aos="fade-down"
          >
            Meet Our Top Instructors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topInstructors.map((instructor, index) => (
              <div
                key={index}
                data-aos="slide-up"
                data-aos-delay={`${index * 150}ms`}
                className="group transform transition-all duration-700 overflow-hidden rounded-2xl"
              >
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 hover:shadow-2xl transition-all duration-500 relative">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={instructor.photo}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-indigo-200 font-medium mb-3">
                      {instructor.title}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-10 py-16 px-4 text-center"
        data-aos="zoom-in"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-6 text-white drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ready to Transform Your Skills?
          </h2>
          <p
            className="text-xl text-gray-200 mb-8 opacity-90"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Join thousands mastering their craft today.
          </p>
          <Link to="/register">
            <button
              className="btn btn-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Start Your Free Trial
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
