import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-12 my-5 lg:my-12'>
            <div className="col-span-12 md:col-span-4">
                {
                    courses.map(course => <LeftSide key={course.course_uid} course={ course} />)
                }
            </div>
            <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    courses.map(course=><RightSide key={course.course_uid} course={course}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default Courses;