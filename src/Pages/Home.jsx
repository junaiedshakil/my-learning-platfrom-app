
import AllCourse from './AllCourse';

import { Link, useLoaderData } from 'react-router';

 
const Home = () => {
   const course = useLoaderData();
    console.log(course);
    
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {course.map((course) => (
            <AllCourse course={course} key={course._id} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link to='/viewall'>
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition">
              View All
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Home;