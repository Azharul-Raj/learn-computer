import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-5">
                {
                    courses.map(course => <LeftSide key={course.course_uid} course={ course} />)
                }
            </div>
            <div className="col-span-7">
                {
                    courses.map(course=><RightSide key={course.course_uid} course={course}/>)
                }
            </div>
        </div>
    );
};

export default Courses;