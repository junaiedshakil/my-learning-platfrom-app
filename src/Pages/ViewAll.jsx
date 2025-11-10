import React from 'react';
import { useLoaderData } from 'react-router';
import SingleCourse from './SingleCourse';

const ViewAll = () => {
    const courses=useLoaderData()
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((singleCourse) => (
          <SingleCourse
            singleCourse={singleCourse}
            key={singleCourse._id}
          ></SingleCourse>
        ))}
      </div>
    );
};

export default ViewAll;