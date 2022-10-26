import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = ({ course }) => {
    const { course_uid } = course;
    console.log(course_uid)
    return (
        <div className='mx-10'>
            <Link to={`/course/${course_uid}`}><button type="button" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Details { course.name}</button></Link>

        </div>
    );
};

export default LeftSide;